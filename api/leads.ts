import { supabase } from './_supabase.js';

function validEmail(value: string) {
  return /^\S+@\S+\.\S+$/.test(value);
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

    const { data, error } = await supabase.from('leads').insert([row]);
    void data;

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

    return res.status(200).json({ ok: true });
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
