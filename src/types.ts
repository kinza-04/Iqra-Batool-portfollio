export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'WordPress' | 'Front-End' | 'SEO & Performance' | 'E-Commerce';
  image: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  client?: string;
  duration?: string;
  role?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  points: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  duration: string;
  field?: string;
}

export interface Skill {
  name: string;
  category: 'core' | 'framework' | 'tool' | 'other';
  icon: string; // Lucide icon name
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
