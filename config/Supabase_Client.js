import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xguwkgecsaiifephwigv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhndXdrZ2Vjc2FpaWZlcGh3aWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMTE1MjUsImV4cCI6MjA0NTc4NzUyNX0.JD6cygSHeAr9LlpaoL3uTc-I4uFOAYjKQBWynj-wFsc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
