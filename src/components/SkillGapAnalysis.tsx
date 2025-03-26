
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SkillGapAnalysisProps {
  skills: string[];
}

const SkillGapAnalysis: React.FC<SkillGapAnalysisProps> = ({ skills }) => {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-gray-700 mb-2">Competências a Desenvolver</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="px-2 py-1 bg-gray-50">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillGapAnalysis;
