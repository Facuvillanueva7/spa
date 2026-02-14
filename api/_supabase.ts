const base = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

export const supabaseFetch = (path: string, init: RequestInit = {}) =>
  fetch(`${base}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: key || '',
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(init.headers || {})
    }
  });
