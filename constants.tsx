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
    title: 'Visionary CRM',
    category: 'Enterprise / CRM',
    description: 'A cloud-based client management portal for logistics companies across West Africa.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '2',
    title: 'Lumina Dashboard',
    category: 'SaaS / Analytics',
    description: 'Real-time data visualization platform for monitoring agricultural yields in the Eastern Region.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e90526ef49?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '3',
    title: 'Kwahu Pay App',
    category: 'Fintech / Mobile',
    description: 'Secure mobile payment gateway supporting local mobile money integrations for retailers.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '4',
    title: 'EduCloud GH',
    category: 'EdTech / Web',
    description: 'Remote learning platform with interactive whiteboards and student progress tracking.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '5',
    title: 'HealthLink Mobile',
    category: 'Health / App',
    description: 'Connecting patients with regional doctors via end-to-end encrypted video consultations.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '6',
    title: 'Estate Pro Web',
    category: 'Real Estate / Web',
    description: 'High-end property listing site with 3D virtual tour integrations and automated booking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  }
];

export const STATS = [
  { label: 'Established', value: '2024', icon: <Cpu className="w-5 h-5" /> },
  { label: 'Uptime', value: '99.9%', icon: <Zap className="w-5 h-5" /> },
  { label: 'Success', value: '100%', icon: <Shield className="w-5 h-5" /> },
];