import { supabase } from './_supabase.js';

type ApiError = Error & {
  stack?: string;
  supabaseError?: {
    message?: string;
    details?: string;
    hint?: string;
    code?: string;
  };
};

function validEmail(value: string) {
  return /^\S+@\S+\.\S+$/.test(value);
}

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
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { name, company, email, need, message, website } = req.body || {};

    if (website) return res.status(200).json({ ok: true });
    if (![name, company, email, need, message].every(Boolean)) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    if (!validEmail(email)) return res.status(400).json({ error: 'Invalid email' });

    const row = {
      name: String(name).trim(),
      company: String(company).trim(),
      email: String(email).trim().toLowerCase(),
      need: String(need).trim(),
      message: String(message).trim()
    };

    const { error } = await supabase.from('leads').insert([row]);

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

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('API_ERROR', err);
    return res.status(500).json(toErrorPayload(err));
  }
}
