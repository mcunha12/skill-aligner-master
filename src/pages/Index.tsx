
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Otimize seu currículo para vagas específicas
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                <span className="inline-block relative">
                  Alinhe
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-primary/30"></span>
                </span>{" "}
                seu perfil com as vagas desejadas
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Envie seu currículo, informe as vagas desejadas e receba versões
                otimizadas do seu currículo e cartas de apresentação personalizadas.
              </p>
              <div className="flex flex-col md:flex-row gap-4 min-[400px]:gap-6 justify-center mt-6">
                <Button
                  size="lg"
                  className="animate-pulse"
                  onClick={() => navigate('/dashboard')}
                >
                  Começar agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                >
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white subtle-border hover-scale">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Currículo Otimizado</h3>
                <p className="text-muted-foreground">
                  Receba versões do seu currículo otimizadas para cada vaga em Português e Inglês.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white subtle-border hover-scale">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Cartas de Apresentação</h3>
                <p className="text-muted-foreground">
                  Gere cartas de apresentação personalizadas para cada vaga em ambos os idiomas.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white subtle-border hover-scale">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Análise de Competências</h3>
                <p className="text-muted-foreground">
                  Descubra quais habilidades você ainda precisa desenvolver para as vagas desejadas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <p className="text-sm text-gray-500">
              © 2023 Skill Aligner. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Termos</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacidade</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
