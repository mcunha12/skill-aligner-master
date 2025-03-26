
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Upload, X, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeData } from '@/types';

interface FileUploadProps {
  resumeData: ResumeData;
  isLoading: boolean;
  onFileUpload: (file: File) => void;
  onClearFile: () => void;
  onLinkedInUrlChange: (url: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  resumeData, 
  isLoading, 
  onFileUpload, 
  onClearFile,
  onLinkedInUrlChange
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    disabled: isLoading || !!resumeData.file
  });

  const handleLinkedInUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLinkedInUrlChange(e.target.value);
  };

  return (
    <div className="rounded-lg subtle-border p-5 mt-4">
      <h3 className="text-lg font-medium mb-2">Currículo</h3>
      
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Linkedin className="h-4 w-4 text-[#0077b5]" />
          <span className="text-sm font-medium">LinkedIn URL (opcional)</span>
        </div>
        <Input
          type="url"
          placeholder="https://www.linkedin.com/in/seu-perfil"
          value={resumeData.linkedInUrl || ''}
          onChange={handleLinkedInUrlChange}
          className="w-full"
        />
        <p className="text-xs text-gray-500 mt-1">
          Forneça o link para seu perfil no LinkedIn para melhorar a análise do seu currículo
        </p>
      </div>
      
      {!resumeData.file ? (
        <div 
          {...getRootProps()} 
          className={`
            flex flex-col items-center justify-center p-10 border-2 border-dashed 
            rounded-lg cursor-pointer transition-all duration-200 
            ${isDragActive 
              ? 'border-primary bg-primary/5' 
              : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
            }
          `}
        >
          <input {...getInputProps()} />
          <Upload className="h-10 w-10 text-gray-400 mb-2" />
          <p className="text-center text-sm text-gray-500">
            Arraste e solte seu currículo em PDF aqui, ou <span className="text-primary font-medium">clique para selecionar</span>
          </p>
          <p className="text-xs text-gray-400 mt-2">PDF (máx. 5MB)</p>
        </div>
      ) : (
        <div className="animate-scale-in">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
            <div className="p-2 bg-primary/10 rounded">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{resumeData.file.name}</p>
              <p className="text-xs text-gray-500">
                {(resumeData.file.size / 1024).toFixed(0)} KB
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClearFile}
              className="text-gray-500 hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
