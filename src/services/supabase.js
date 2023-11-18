
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://zrysxkndwkurtkkmvwaq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyeXN4a25kd2t1cnRra212d2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNDYyOTYsImV4cCI6MjAxNTYyMjI5Nn0.7DpWbattAaoiCzzzlMx5-K76zVa43jU_ojPsYRi9w1U'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

