import { createClient } from '@supabase/supabase-js';

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    const token = String(req.headers.authorization || '').replace('Bearer ', '');
    if (!process.env.ADMIN_PASSWORD || token !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'unauthorized' });
    }

    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
      return res.status(500).json({
        error: 'missing_env',
        hasUrl: !!process.env.SUPABASE_URL,
        hasKey: !!process.env.SUPABASE_ANON_KEY
      });
    }

    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('SUPABASE_ERROR', error);
      return res.status(500).json({
        error: 'db_error',
        supabase: {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        }
      });
    }

    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ data });
  } catch (err) {
    console.error('API_ERROR', err);
    const error = err as Error & { stack?: string };
    return res.status(500).json({
      ok: false,
      message: error.message ?? String(err),
      stack: error.stack ?? null
    });
  }
}
