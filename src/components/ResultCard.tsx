
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import SkillGapAnalysis from './SkillGapAnalysis';
import { ResultData } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile';

interface ResultCardProps {
  result: ResultData;
  index: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, index }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [contentType, setContentType] = useState<'resume' | 'coverLetter'>('resume');
  const isMobile = useIsMobile();

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
    <Card className="animate-scale-in card-shadow w-full border-quaternary/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Resultado para Vaga {index + 1}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {result.jobDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Tabs defaultValue="resume" onValueChange={(v) => setContentType(v as 'resume' | 'coverLetter')}>
          <div className={`flex ${isMobile ? 'flex-col gap-2' : 'justify-between items-center'} mb-3`}>
            <TabsList className="mb-1">
              <TabsTrigger value="resume" className="text-sm">Currículo</TabsTrigger>
              <TabsTrigger value="coverLetter" className="text-sm">Carta</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="sm" 
                className={`text-xs ${language === 'pt' ? 'bg-quaternary text-quaternary-foreground' : 'bg-transparent'}`}
                onClick={() => setLanguage('pt')}
              >
                PT
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className={`text-xs ${language === 'en' ? 'bg-quaternary text-quaternary-foreground' : 'bg-transparent'}`}
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
                className="h-7 w-7"
              >
                <Copy className="h-3.5 w-3.5" />
              </Button>
            </div>
            <div className="whitespace-pre-line bg-gray-50 p-3 rounded-lg mt-2 text-sm max-h-[250px] overflow-y-auto text-left">
              {getActiveContent()}
            </div>
          </TabsContent>
          
          <TabsContent value="coverLetter" className="mt-0 relative">
            <div className="absolute top-2 right-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => copyToClipboard(getActiveContent(), 'Carta')}
                className="h-7 w-7"
              >
                <Copy className="h-3.5 w-3.5" />
              </Button>
            </div>
            <div className="whitespace-pre-line bg-gray-50 p-3 rounded-lg mt-2 text-sm max-h-[250px] overflow-y-auto text-left">
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
