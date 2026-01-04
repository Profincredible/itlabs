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
  phone: '0248362847',
  emails: {
    general: 'info@itlabsghana.com',
    support: 'support@itlabsghana.com',
    ceo: 'prof@itlabsghana.com'
  },
  promo: 'New Year 2026 Gift: Free website development — clients only pay for domain and hosting. Limited slots for 2026!'
};

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Website Creation',
    description: 'Bespoke, blazing-fast websites with high conversion rates and immersive UI/UX experiences.',
    iconName: 'Globe',
    deliveryBadge: '2-3 Weeks'
  },
  {
    id: 'software',
    title: 'Custom Software',
    description: 'Enterprise-grade software designed to automate workflows and solve complex business logic.',
    iconName: 'Code',
    deliveryBadge: '4 Weeks+'
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Feature-rich iOS and Android applications built for performance, security, and scalability.',
    iconName: 'Smartphone',
    deliveryBadge: '4-6 Weeks'
  },
  {
    id: 'saas',
    title: 'SaaS Platforms',
    description: 'Cloud-native multi-tenant applications designed for recurring revenue and global reach.',
    iconName: 'Cloud',
    deliveryBadge: '4 Weeks+'
  },
  {
    id: 'crm',
    title: 'CRM Systems',
    description: 'Tailored management systems to track customers, inventory, and sales with real-time analytics.',
    iconName: 'Database',
    deliveryBadge: '3-4 Weeks'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Quantum CRM',
    category: 'Software Architecture',
    description: 'Enterprise resource planning system built for high-scale logistics and multi-region data sync.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '2',
    title: 'Nebula Dashboard',
    category: 'Cloud Engineering',
    description: 'Real-time monitoring system for distributed server networks and edge computing nodes.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '3',
    title: 'Titan Pay',
    category: 'Fintech Mobile',
    description: 'Biometric-secured payment gateway facilitating millions of transactions across the continent.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '4',
    title: 'Core Engine 2.0',
    category: 'System Logic',
    description: 'Back-end infrastructure for a national education portal, serving over 500k active users.',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '5',
    title: 'Guardian AI',
    category: 'Cyber Security',
    description: 'Automated threat detection and intrusion prevention system for government-level assets.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '6',
    title: 'Flux SaaS',
    category: 'Product Engineering',
    description: 'A multi-tenant workflow automation tool designed for the modern remote-first workforce.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  }
];

export const STATS = [
  { label: 'Uptime (2025)', value: '99.9%', icon: <Zap className="w-5 h-5" /> },
  { label: 'Security Grade', value: 'A+', icon: <Shield className="w-5 h-5" /> },
  { label: 'Tech Stack', value: 'Next-Gen', icon: <Cpu className="w-5 h-5" /> },
];