import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactRequest {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  preferred_contact?: string;
  status?: string;
  created_at?: string;
}
