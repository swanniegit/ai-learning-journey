import { createClient } from '@supabase/supabase-js';

/**
 * Initializes and exports a Supabase client instance. The URL and key are
 * sourced from environment variables. To enable Supabase integration you
 * should define `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in
 * your Vercel or `.env.local` configuration. See the README for details.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);