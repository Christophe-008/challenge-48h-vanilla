import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.0/+esm";
const supabaseUrl = "https://yxkllfidzmiceknpzsia.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4a2xsZmlkem1pY2VrbnB6c2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MjEwMTAsImV4cCI6MjA0Njk5NzAxMH0.nI8rStLEGJk2dwCe9LkJEZ2Cf6CX-HWgZF9crvjRN90";
export const supabaseClient = createClient(supabaseUrl, supabaseKey);
