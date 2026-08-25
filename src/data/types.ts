export interface PersonalInfo {
  name: string;
  titles: string[];
  tagline: string;
  summary: string;
  extendedBio: string[];
  email: string;
  phone: string;
  avatarUrl?: string;
  location: string;
  college: string;
  degree: string;
  graduationYear: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface SpecializationArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  technologies: string[];
  gradient: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface ProjectArchitectureStep {
  title: string;
  desc: string;
  icon?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'AI & Generative AI' | 'Data & Analytics' | 'Algorithms & Optimization' | 'Backend Systems';
  tagline: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  architecture: ProjectArchitectureStep[];
  technologies: string[];
  impactMetrics: {
    value: string;
    label: string;
  }[];
  verifiedFeatures: string[];
  contribution: string[];
  visualType: 'rag-pipeline' | 'bi-dashboard' | 'bank-analysis' | 'route-optimizer' | 'traffic-light';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  technologies: string[];
  description: string;
  highlights: string[];
  pipelineSteps: string[];
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
  points: string[];
}

export interface EducationItem {
  id: string;
  stage: 'Class 10' | 'Class 12' | 'Graduation';
  institution: string;
  degreeOrExam: string;
  scoreOrField: string;
  period: string;
  location: string;
  status?: string;
  isProminent?: boolean;
  highlights?: string[];
  relevantCoursework?: string[];
}

export interface ImpactMetric {
  value: string;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  category: string;
  sourceProject: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  specializations: SpecializationArea[];
  skillCategories: SkillCategory[];
  impactMetrics: ImpactMetric[];
  projects: Project[];
  experience: Experience[];
  leadership: LeadershipItem[];
  education: EducationItem[];
}
