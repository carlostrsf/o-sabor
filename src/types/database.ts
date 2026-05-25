// src/types/database.ts
export interface Product {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  package_size: string | null;
  image_url: string | null;
  active: boolean;
  created_at: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  customer_type: string | null;
  message: string | null;
  created_at: string;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  comment: string;
  image_url: string | null;
  active: boolean;
  created_at: string;
}
