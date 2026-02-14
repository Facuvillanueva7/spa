import enRaw from './en-ai-resourcing.md?raw';
import esRaw from './es-primer-pipeline.md?raw';
import type { BlogPost } from '../../types';

function parsePost(raw: string): BlogPost {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error('Invalid markdown frontmatter');

  const [, frontmatter, body] = match;
  const entries = frontmatter.split('\n').filter(Boolean).map((line) => {
    const [key, ...rest] = line.split(':');
    return [key.trim(), rest.join(':').trim().replace(/^"|"$/g, '')];
  });

  const data = Object.fromEntries(entries) as Record<string, string>;

  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    lang: data.lang as BlogPost['lang'],
    body
  };
}

export const posts = [parsePost(esRaw), parsePost(enRaw)].sort((a, b) =>
  a.date < b.date ? 1 : -1
);
