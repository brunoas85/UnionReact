// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcgwbarwnbafmgpscgsj.supabase.co';
const supabaseAnonKey = 'sb_publishable_w29w3k_bat-gTi-hSSXYsA_s_uryaXg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);