import { createClient } from "@supabase/supabase-js";

// Use the same configuration as AuthPage.jsx
const supabaseUrl = "https://gjigdggtkttoagacnhzw.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Make sure the client is available globally for debugging
if (typeof window !== 'undefined') {
  window.supabase = supabase;
}

// Helper function to get current user session
export const getCurrentSession = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
};

// Helper function to get current user ID
export const getCurrentUserId = async () => {
  const session = await getCurrentSession();
  return session?.user?.id;
}; 