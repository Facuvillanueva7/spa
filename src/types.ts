export type Locale = 'es' | 'en';

export type LeadPayload = {
  name: string;
  company: string;
  email: string;
  need: string;
  message: string;
  website?: string;
};

export type Lead = LeadPayload & {
  id: string;
  created_at: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  lang: Locale;
  body: string;
};
