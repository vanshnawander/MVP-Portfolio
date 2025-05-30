export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  link?: string;
}

export interface JobPosition {
  id: number;
  title: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}