
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import SkillGapAnalysis from './SkillGapAnalysis';
import { ResultData } from '@/types';

interface ResultCardProps {
  result: ResultData;
  index: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, index }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [contentType, setContentType] = useState<'resume' | 'coverLetter'>('resume');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copiado para a área de transferência!`);
  };

  const getActiveContent = () => {
    if (contentType === 'resume') {
      return language === 'pt' ? result.portugueseResume : result.englishResume;
    } else {
      return language === 'pt' ? result.portugueseCoverLetter : result.englishCoverLetter;
    }
  };

  return (
    <Card className="animate-scale-in card-shadow">
      <CardHeader>
        <CardTitle>Resultado para Vaga {index + 1}</CardTitle>
        <CardDescription className="line-clamp-2">
          {result.jobDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="resume" onValueChange={(v) => setContentType(v as 'resume' | 'coverLetter')}>
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="resume">Currículo</TabsTrigger>
              <TabsTrigger value="coverLetter">Carta de Apresentação</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="sm" 
                className={`text-xs ${language === 'pt' ? 'bg-primary text-primary-foreground' : 'bg-transparent'}`}
                onClick={() => setLanguage('pt')}
              >
                PT
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className={`text-xs ${language === 'en' ? 'bg-primary text-primary-foreground' : 'bg-transparent'}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </Button>
            </div>
          </div>
          
          <TabsContent value="resume" className="mt-0 relative">
            <div className="absolute top-2 right-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => copyToClipboard(getActiveContent(), 'Currículo')}
                className="h-8 w-8"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="whitespace-pre-line bg-gray-50 p-4 rounded-lg mt-2 text-sm max-h-[300px] overflow-y-auto">
              {getActiveContent()}
            </div>
          </TabsContent>
          
          <TabsContent value="coverLetter" className="mt-0 relative">
            <div className="absolute top-2 right-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => copyToClipboard(getActiveContent(), 'Carta')}
                className="h-8 w-8"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="whitespace-pre-line bg-gray-50 p-4 rounded-lg mt-2 text-sm max-h-[300px] overflow-y-auto">
              {getActiveContent()}
            </div>
          </TabsContent>
        </Tabs>
        
        <SkillGapAnalysis skills={result.skillGap} />
      </CardContent>
    </Card>
  );
};

export default ResultCard;
