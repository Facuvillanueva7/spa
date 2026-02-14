import { useI18n } from '../../i18n/I18nProvider';

export function Navbar({ navigate }: { navigate: (to: string) => void }) {
  const { t, locale, setLocale } = useI18n();
  const links = ['services', 'process', 'capabilities', 'faq', 'about', 'contact'] as const;

  return (
    <header className='nav'>
      <div className='container nav-row'>
        <button className='link-btn brand' onClick={() => navigate('/')}>{t('brand')}</button>
        <nav className='nav-links' aria-label='Main Navigation'>
          {links.map((link) => <a key={link} href={`/#${link}`}>{t(`nav.${link}`)}</a>)}
          <button className='link-btn' onClick={() => navigate('/blog')}>{t('nav.blog')}</button>
          <button className='link-btn' onClick={() => navigate('/admin')}>{t('nav.admin')}</button>
        </nav>
        <button className='btn' onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}>
          {locale.toUpperCase()}
        </button>
      </div>
    </header>
  );
}
