import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oiacuuealxphliibmqof.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pYWN1dWVhbHhwaGxpaWJtcW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxODE5NzcsImV4cCI6MjA1ODc1Nzk3N30.0OK_zFc47SFWhnaA0EwEMyNmbOHoMfGBQxRAl0WpgTU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
