import { supabaseFetch } from '../_supabase';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const token = String(req.headers.authorization || '').replace('Bearer ', '');
  if (!process.env.ADMIN_PASSWORD || token !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const response = await supabaseFetch('leads?select=*&order=created_at.desc');
  const data = await response.json();

  if (!response.ok) return res.status(500).json({ error: 'db_error' });

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ data });
}
