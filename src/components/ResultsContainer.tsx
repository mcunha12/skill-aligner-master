
import React from 'react';
import ResultCard from './ResultCard';
import { ResultData } from '@/types';

interface ResultsContainerProps {
  results: ResultData[];
}

const ResultsContainer: React.FC<ResultsContainerProps> = ({ results }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-medium mb-6">Resultados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <ResultCard key={result.id} result={result} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ResultsContainer;
