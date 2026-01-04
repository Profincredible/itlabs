
export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliveryBadge: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface BrandInfo {
  name: string;
  location: string;
  established: string;
  phone: string;
  emails: {
    general: string;
    support: string;
    ceo: string;
  };
  promo: string;
}
