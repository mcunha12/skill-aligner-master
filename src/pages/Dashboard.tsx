
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Header from '@/components/Header';
import FileUpload from '@/components/FileUpload';
import InitialDirections from '@/components/InitialDirections';
import JobDescription from '@/components/JobDescription';
import ResultsContainer from '@/components/ResultsContainer';
import { useFileUpload } from '@/hooks/useFileUpload';
import { JobDescription as JobDescriptionType, InitialDirections as InitialDirectionsType, ResultData } from '@/types';

const Dashboard = () => {
  const { file, fileContent, isLoading, handleFileUpload, clearFile } = useFileUpload();
  
  const [initialDirections, setInitialDirections] = useState<InitialDirectionsType>({ content: '' });
  
  const [jobDescriptions, setJobDescriptions] = useState<JobDescriptionType[]>([
    { id: uuidv4(), content: '' }
  ]);
  
  const [results, setResults] = useState<ResultData[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addJobDescription = () => {
    if (jobDescriptions.length < 3) {
      setJobDescriptions([...jobDescriptions, { id: uuidv4(), content: '' }]);
    } else {
      toast.error('Máximo de 3 descrições de vagas permitido.');
    }
  };

  const removeJobDescription = (id: string) => {
    if (jobDescriptions.length > 1) {
      setJobDescriptions(jobDescriptions.filter(job => job.id !== id));
    } else {
      toast.error('É necessário ter pelo menos uma descrição de vaga.');
    }
  };

  const updateJobDescription = (id: string, content: string) => {
    setJobDescriptions(
      jobDescriptions.map(job => 
        job.id === id ? { ...job, content } : job
      )
    );
  };

  const processResume = () => {
    // Validations
    if (!file) {
      toast.error('Por favor, faça upload do seu currículo.');
      return;
    }

    if (!initialDirections.content.trim()) {
      toast.error('Por favor, forneça direcionamentos iniciais.');
      return;
    }

    const emptyJobs = jobDescriptions.filter(job => !job.content.trim());
    if (emptyJobs.length > 0) {
      toast.error('Por favor, preencha todas as descrições de vagas.');
      return;
    }

    setIsProcessing(true);
    toast.info('Processando seu currículo...');

    // Simulate API call to GPT
    setTimeout(() => {
      const newResults = jobDescriptions.map(job => ({
        id: uuidv4(),
        jobDescription: job.content,
        portugueseResume: `Currículo otimizado em Português para a vaga:\n\n${job.content.substring(0, 50)}...\n\nNome: João Silva\nE-mail: joao@example.com\n\nExperiência Profissional:\n- Desenvolvedor Senior (2018-2023)\n- Analista de Sistemas (2014-2018)`,
        englishResume: `Optimized Resume in English for the job:\n\n${job.content.substring(0, 50)}...\n\nName: João Silva\nEmail: joao@example.com\n\nProfessional Experience:\n- Senior Developer (2018-2023)\n- Systems Analyst (2014-2018)`,
        portugueseCoverLetter: `Carta de Apresentação em Português:\n\nPrezado Recrutador,\n\nEstou entusiasmado em candidatar-me à vaga de [Cargo]. Com [X] anos de experiência em...\n\nAtenciosamente,\nJoão Silva`,
        englishCoverLetter: `Cover Letter in English:\n\nDear Recruiter,\n\nI am excited to apply for the [Position] role. With [X] years of experience in...\n\nSincerely,\nJoão Silva`,
        skillGap: ['React Native', 'AWS', 'TypeScript', 'GraphQL'],
      }));

      setResults(newResults);
      setIsProcessing(false);
      toast.success('Processamento concluído!');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">Informações</h2>
              
              <FileUpload 
                resumeData={{ file, fileContent }}
                isLoading={isLoading}
                onFileUpload={handleFileUpload}
                onClearFile={clearFile}
              />
              
              <InitialDirections 
                initialDirections={initialDirections}
                setInitialDirections={setInitialDirections}
              />
              
              {jobDescriptions.map((job, index) => (
                <JobDescription
                  key={job.id}
                  jobDescription={job}
                  index={index}
                  updateJobDescription={updateJobDescription}
                  removeJobDescription={removeJobDescription}
                  isRemovable={jobDescriptions.length > 1}
                />
              ))}
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                {jobDescriptions.length < 3 && (
                  <Button 
                    variant="outline" 
                    onClick={addJobDescription}
                    className="flex-1"
                    disabled={isProcessing}
                  >
                    Adicionar Vaga
                  </Button>
                )}
                
                <Button 
                  onClick={processResume} 
                  className="flex-1"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processando...' : 'Processar Currículo'}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-20 p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">Instruções</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-medium">1. Faça upload do seu currículo</h3>
                  <p className="text-gray-500">Formatos aceitos: PDF (máx. 5MB)</p>
                </div>
                <div>
                  <h3 className="font-medium">2. Forneça direcionamentos</h3>
                  <p className="text-gray-500">Adicione instruções específicas sobre o que deseja enfatizar ou modificar</p>
                </div>
                <div>
                  <h3 className="font-medium">3. Insira as descrições de vagas</h3>
                  <p className="text-gray-500">Adicione até 3 vagas para as quais deseja otimizar seu currículo</p>
                </div>
                <div>
                  <h3 className="font-medium">4. Obtenha resultados</h3>
                  <p className="text-gray-500">Receba currículos e cartas de apresentação em PT e EN, além de análise de competências</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ResultsContainer results={results} />
      </main>
      
      <footer className="border-t py-6">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2023 Skill Aligner. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
