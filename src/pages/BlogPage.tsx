import { posts } from '../content/blog/posts';
import { Markdown } from '../components/Markdown';
import { useI18n } from '../i18n/I18nProvider';

export function BlogListPage({ navigate }: { navigate: (to: string) => void }) {
  const { locale } = useI18n();
  const visiblePosts = posts.filter((post) => post.lang === locale);

  return (
    <section className='container'>
      <h1>Blog</h1>
      <div className='grid'>
        {visiblePosts.map((post) => (
          <button key={post.slug} className='card left' onClick={() => navigate(`/blog/${post.slug}`)}>
            <h3>{post.title}</h3>
            <p className='muted'>{post.excerpt}</p>
            <small>{post.date}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

export function BlogPostPage({ slug }: { slug: string }) {
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return <section className='container'><p>Post not found.</p></section>;
  }

  return (
    <section className='container'>
      <h1>{post.title}</h1>
      <p className='muted'>{post.date}</p>
      <Markdown content={post.body} />
    </section>
  );
}
