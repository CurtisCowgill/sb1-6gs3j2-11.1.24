export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  startDate: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  crewId?: string;
  skills: string[];
  certifications: Certification[];
  performanceMetrics: PerformanceMetric[];
  avatar?: string;
}

export interface Certification {
  id: string;
  name: string;
  issueDate: string;
  expiryDate: string;
  issuingAuthority: string;
}

export interface PerformanceMetric {
  id: string;
  date: string;
  category: string;
  score: number;
  notes: string;
}

export interface Crew {
  id: string;
  name: string;
  lead: Employee;
  members: Employee[];
  specialty: string;
  status: 'Available' | 'Assigned' | 'On Leave';
  currentProject?: Project;
  performanceRating: number;
  equipmentAssigned: string[];
}

export interface Customer {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  projects: Project[];
  status: 'Active' | 'Inactive';
  notes: string;
  preferredCommunication: 'Email' | 'Phone' | 'Text';
  rating: number;
  lastContact: string;
}

export interface Project {
  id: string;
  name: string;
  customer: string;
  stage: string;
  startDate: string;
  location?: string;
  status?: string;
  budget?: string;
  completion?: string;
}

export interface Stage {
  id: string;
  title: string;
}

export interface WorkOrder {
  id: string;
  title: string;
  crew: string;
  startDate: string;
  inspection: string;
  concrete: string;
  vendors: string[];
  status: string;
  progress: number;
}

export interface WeatherForecast {
  date: string;
  conditions: string;
  high: number;
  low: number;
}