
import { useState } from 'react';
import { toast } from 'sonner';

export const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [linkedInUrl, setLinkedInUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileUpload = (uploadedFile: File) => {
    if (!uploadedFile.name.endsWith('.pdf')) {
      toast.error('Por favor, faça upload de um arquivo PDF.');
      return;
    }

    if (uploadedFile.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error('O arquivo é muito grande. O tamanho máximo é 5MB.');
      return;
    }

    setIsLoading(true);
    setFile(uploadedFile);

    // Here we would normally extract text from PDF
    // For now we're simulating this process
    setTimeout(() => {
      setFileContent(`Conteúdo simulado do PDF do currículo para ${uploadedFile.name}`);
      setIsLoading(false);
      toast.success('Currículo carregado com sucesso!', {
        duration: 2000,
        position: 'bottom-center',
      });
    }, 1500);
  };

  const handleLinkedInUrlChange = (url: string) => {
    setLinkedInUrl(url.trim() ? url : null);
    
    if (url.trim() && url.includes('linkedin.com')) {
      toast.success('URL do LinkedIn válida', {
        duration: 2000,
        position: 'bottom-center',
      });
    }
  };

  const clearFile = () => {
    setFile(null);
    setFileContent(null);
  };

  return {
    file,
    fileContent,
    linkedInUrl,
    isLoading,
    handleFileUpload,
    handleLinkedInUrlChange,
    clearFile
  };
};
