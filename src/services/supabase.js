import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wzevamzjhetmxlytxxea.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZXZhbXpqaGV0bXhseXR4eGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5Mjc1NzQsImV4cCI6MjAyNTUwMzU3NH0.cvmZ1p22LwI3qssDnmlXTet9Zn4gzeXrkAXrQ-z2JhQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
