import { useI18n } from '../../i18n/I18nProvider';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className='container footer'>
      <small>{t('footer', { year: new Date().getFullYear() })}</small>
      <span>·</span>
      <a href='/privacy'>Privacy</a>
      <span>·</span>
      <a href='/cookies'>Cookies</a>
    </footer>
  );
}
