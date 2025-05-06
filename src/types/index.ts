export interface NavItem {
  label: string;
  path: string;
  isActive?: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  
  imageUrl: string;
  category: 'cultural' | 'sports' | 'academic' | 'other';
  year: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: number;
  imageUrl: string;
  category: 'school' | 'academic';
}

export interface Faculty {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  
}

export interface Building {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
}

export interface RegistrationFormData {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  grade: string;
  academicYear: string;
  previousSchool?: string;
  documents?: FileList;
}