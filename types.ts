import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CaseStudyProps {
  clinicName: string;
  feedback: string;
}

export interface LayerProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
}