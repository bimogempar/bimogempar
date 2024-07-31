import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ceuouzffprqdpxrluapd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNldW91emZmcHJxZHB4cmx1YXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMTM5MTMsImV4cCI6MjAzNzU4OTkxM30.6t6-5Whw6uJjPw4U1bEuule5GoDmZlHxPZ2oCWct8Mg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase