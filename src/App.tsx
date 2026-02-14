import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { BlogListPage, BlogPostPage } from './pages/BlogPage';
import { LegalPage } from './pages/LegalPage';
import { AdminPage } from './pages/AdminPage';
import { useI18n } from './i18n/I18nProvider';
import { useRouter } from './lib/router';
import { useState } from 'react';

function CookieBanner() {
  const { t } = useI18n();
  const [value, setValue] = useState<string | null>(() => localStorage.getItem('cookie-consent'));

  if (value) return null;

  const save = (next: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', next);
    setValue(next);
  };

  return (
    <aside className='cookie card' role='dialog' aria-live='polite'>
      <p>{t('cookies.text')}</p>
      <div className='actions'>
        <button className='btn primary' onClick={() => save('accepted')}>{t('cookies.accept')}</button>
        <button className='btn' onClick={() => save('rejected')}>{t('cookies.reject')}</button>
      </div>
    </aside>
  );
}

export default function App() {
  const { pathname, navigate } = useRouter();
  const slug = pathname.startsWith('/blog/') ? pathname.replace('/blog/', '') : '';

  return (
    <>
      <Navbar navigate={navigate} />
      {pathname === '/' && <HomePage />}
      {pathname === '/blog' && <BlogListPage navigate={navigate} />}
      {pathname.startsWith('/blog/') && <BlogPostPage slug={slug} />}
      {pathname === '/privacy' && <LegalPage type='privacy' />}
      {pathname === '/cookies' && <LegalPage type='cookies' />}
      {pathname === '/admin' && <AdminPage />}
      <Footer />
      <CookieBanner />
    </>
  );
}
