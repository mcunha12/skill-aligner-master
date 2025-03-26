
export interface JobDescription {
  id: string;
  content: string;
}

export interface InitialDirections {
  content: string;
}

export interface ResumeData {
  file: File | null;
  fileContent: string | null;
}

export interface ResultData {
  id: string;
  jobDescription: string;
  portugueseResume: string;
  englishResume: string;
  portugueseCoverLetter: string;
  englishCoverLetter: string;
  skillGap: string[];
}
