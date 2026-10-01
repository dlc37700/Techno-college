import { createClient } from "@supabase/supabase-js";

// La clé "publishable" est publique par conception : la sécurité repose sur les règles RLS en base.
const url = import.meta.env.VITE_SUPABASE_URL || "https://itgwyxjoxoasutzomaal.supabase.co";
const key = import.meta.env.VITE_SUPABASE_KEY || "sb_publishable_457DZ2TVtstTUExCCKWO1A__O29SsrJ";

export const supabase = createClient(url, key);
