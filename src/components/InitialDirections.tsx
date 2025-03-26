
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { InitialDirections as InitialDirectionsType } from '@/types';

interface InitialDirectionsProps {
  initialDirections: InitialDirectionsType;
  setInitialDirections: React.Dispatch<React.SetStateAction<InitialDirectionsType>>;
}

const InitialDirections: React.FC<InitialDirectionsProps> = ({ 
  initialDirections, 
  setInitialDirections 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInitialDirections({ content: e.target.value });
  };

  return (
    <div className="rounded-lg subtle-border p-5 mt-4 animate-fade-in">
      <h3 className="text-lg font-medium mb-2">Direcionamento Inicial</h3>
      <p className="text-sm text-gray-500 mb-4">
        Escreva instruções gerais e observações para a otimização do seu currículo.
      </p>
      <Textarea
        placeholder="Ex: Quero enfatizar minhas habilidades de liderança, estou pivotando para uma carreira em ciência de dados..."
        value={initialDirections.content}
        onChange={handleChange}
        className="min-h-[100px] resize-y"
      />
    </div>
  );
};

export default InitialDirections;
