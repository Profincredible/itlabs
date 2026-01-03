
import React from 'react';
import { 
  Globe, 
  Code, 
  Smartphone, 
  Cloud, 
  Database,
  Shield,
  Zap,
  Cpu
} from 'lucide-react';
import { BrandInfo, Service, Project } from './types';

export const BRAND: BrandInfo = {
  name: 'ITLabs Ghana',
  location: 'Abetifi, Kwahu, Ghana',
  established: '2024',
  emails: {
    general: 'info@itlabsghana.com',
    support: 'support@itlabsghana.com',
    ceo: 'prof@itlabsghana.com'
  },
  promo: 'New Year Gift: Free website development—clients only pay for domain and hosting.'
};

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Website Creation',
    description: 'High-performance, SEO-optimized corporate and personal websites tailored for success.',
    iconName: 'Globe',
    deliveryBadge: '2-3 Weeks'
  },
  {
    id: 'software',
    title: 'Custom Software',
    description: 'Bespoke software solutions built to solve your unique business challenges.',
    iconName: 'Code',
    deliveryBadge: '4 Weeks+'
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android ecosystems.',
    iconName: 'Smartphone',
    deliveryBadge: '4-6 Weeks'
  },
  {
    id: 'saas',
    title: 'SaaS Solutions',
    description: 'Scalable cloud-based platforms designed for global accessibility and performance.',
    iconName: 'Cloud',
    deliveryBadge: '4 Weeks+'
  },
  {
    id: 'crm',
    title: 'CRM Systems',
    description: 'Robust customer relationship management tools to streamline your operations.',
    iconName: 'Database',
    deliveryBadge: '3-4 Weeks'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EduTrack Ghana',
    category: 'SaaS / Education',
    description: 'A comprehensive school management system for local institutions.',
    image: 'https://picsum.photos/seed/edu/800/600',
    link: '#'
  },
  {
    id: '2',
    title: 'Kwahu Marketplace',
    category: 'E-commerce',
    description: 'A regional multi-vendor platform connecting local sellers with buyers.',
    image: 'https://picsum.photos/seed/market/800/600',
    link: '#'
  },
  {
    id: '3',
    title: 'HealthCare Plus',
    category: 'Mobile App',
    description: 'Connecting patients in Kwahu with specialized medical consultants.',
    image: 'https://picsum.photos/seed/health/800/600',
    link: '#'
  }
];

export const STATS = [
  { label: 'Founded', value: '2024', icon: <Cpu className="w-5 h-5" /> },
  { label: 'Projects Delivered', value: '15+', icon: <Zap className="w-5 h-5" /> },
  { label: 'Expert Engineers', value: '8', icon: <Shield className="w-5 h-5" /> },
];
