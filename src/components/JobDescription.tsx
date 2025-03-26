
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JobDescription as JobDescriptionType } from '@/types';

interface JobDescriptionProps {
  jobDescription: JobDescriptionType;
  index: number;
  updateJobDescription: (id: string, content: string) => void;
  removeJobDescription?: (id: string) => void;
  isRemovable?: boolean;
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  jobDescription,
  index,
  updateJobDescription,
  removeJobDescription,
  isRemovable = true
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateJobDescription(jobDescription.id, e.target.value);
  };

  return (
    <div className="rounded-lg subtle-border p-5 mt-4 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">Vaga {index + 1}</h3>
        {isRemovable && removeJobDescription && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeJobDescription(jobDescription.id)}
            className="h-7 w-7 text-gray-500 hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Cole a descrição completa da vaga ou informações do perfil do LinkedIn.
      </p>
      <Textarea
        placeholder="Insira a descrição da vaga aqui..."
        value={jobDescription.content}
        onChange={handleChange}
        className="min-h-[120px] resize-y"
      />
    </div>
  );
};

export default JobDescription;
