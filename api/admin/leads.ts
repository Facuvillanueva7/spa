import { supabase } from '../_supabase.js';

type ApiError = Error & {
  stack?: string;
  supabaseError?: {
    message?: string;
    details?: string;
    hint?: string;
    code?: string;
  };
};

function toErrorPayload(err: unknown) {
  const apiError = err as ApiError;
  return {
    ok: false,
    message: apiError?.message ?? String(err),
    stack: apiError?.stack ?? null,
    ...(apiError?.supabaseError ? { supabaseError: apiError.supabaseError } : {})
  };
}

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    const token = String(req.headers.authorization || '').replace('Bearer ', '');
    if (!process.env.ADMIN_PASSWORD || token !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'unauthorized' });
    }

    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      const supabaseApiError = new Error('db_error') as ApiError;
      supabaseApiError.supabaseError = {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      };
      throw supabaseApiError;
    }

    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ data });
  } catch (err) {
    console.error('API_ERROR', err);
    return res.status(500).json(toErrorPayload(err));
  }
}
