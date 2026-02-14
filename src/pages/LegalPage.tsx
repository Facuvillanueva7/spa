import { useI18n } from '../i18n/I18nProvider';

export function LegalPage({ type }: { type: 'privacy' | 'cookies' }) {
  const { locale, t } = useI18n();

  const content = {
    es: {
      privacy: ['Recopilamos solo los datos que enviás por formulario.', 'Usamos esa información para responder tu consulta comercial.', 'No vendemos ni compartimos datos personales con terceros fuera de la operación del servicio.'],
      cookies: ['Este sitio usa cookies de preferencia para idioma y consentimiento.', 'Podés aceptar o rechazar el banner sin bloquear navegación básica.', 'No usamos cookies invasivas ni perfiles publicitarios.']
    },
    en: {
      privacy: ['We only collect the data you submit in the contact form.', 'We use that information to answer your business inquiry.', 'We do not sell or share personal data outside operational service needs.'],
      cookies: ['This website uses preference cookies for language and consent.', 'You can accept or reject the banner without blocking core navigation.', 'We do not use invasive cookies or advertising profiles.']
    }
  };

  const title = type === 'privacy' ? t('legal.privacyTitle') : t('legal.cookiesTitle');
  const blocks = content[locale][type];

  return (
    <section className='container'>
      <h1>{title}</h1>
      <p className='muted'>{t('legal.disclaimer')}</p>
      <div className='grid'>
        {blocks.map((item) => <article key={item} className='card'>{item}</article>)}
      </div>
    </section>
  );
}
