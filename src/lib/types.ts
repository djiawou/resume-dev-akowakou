
export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint?: string;
  demoUrl?: string;
  repoUrl?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string | string[];
  technologies?: string[];
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  date: string;
  location: string;
  country: string;
  website?: string;
  description: string | string[];
};

export type Certificate = {
  id:string;
  title: string;
  issuer: string;
  date: string;
  url: string;
  skills: string[];
};
