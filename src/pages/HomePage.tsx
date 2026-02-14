import { useState, type FormEvent } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import type { LeadPayload } from '../types';

const WHATSAPP = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '5491111111111'}?text=${encodeURIComponent('Hola! Quiero mejorar mi hiring tech con enfoque data-driven.')}`;
const EMAIL = `mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'hello@aidatarecruitment.com'}`;

export function HomePage() {
  const { t, locale } = useI18n();
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    if (fd.get('website')) return;

    const payload = Object.fromEntries(fd.entries()) as unknown as LeadPayload;
    setStatus('loading');

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setStatus('ok');
      event.currentTarget.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <>
      <section className='hero container'>
        <span className='chip'>{t('hero.badge')}</span>
        <h1>{t('hero.title')}</h1>
        <p className='muted'>{t('hero.subtitle')}</p>
        <div className='actions'>
          <a className='btn primary' href={WHATSAPP}>{t('hero.whatsapp')}</a>
          <a className='btn' href={EMAIL}>{t('hero.email')}</a>
        </div>
      </section>

      <section id='services'><div className='container'><h2>{t('sections.services')}</h2><div className='grid grid-2'>
        <article className='card'><h3>Staff Augmentation / Resourcing</h3><p className='muted'>{locale === 'es' ? 'Perfiles listos para escalar capacidad con velocidad y predictibilidad.' : 'Ready-to-hire profiles that scale team capacity fast and predictably.'}</p></article>
        <article className='card'><h3>Talent Mapping</h3><p className='muted'>{locale === 'es' ? 'Mapa vivo de mercado, señales de disponibilidad y riesgos de contratación.' : 'Live market map with availability signals and hiring risk indicators.'}</p></article>
      </div></div></section>

      <section id='process'><div className='container'><h2>{t('sections.process')}</h2><div className='grid grid-2'>
        {(locale === 'es'
          ? ['1. Discovery técnico y de negocio','2. Definición de scorecards y SLA','3. Sourcing con señales AI + datos','4. Entrevistas estructuradas y calibración','5. Feedback semanal y mejora continua']
          : ['1. Technical and business discovery','2. Scorecards and SLA definition','3. AI/data signal-driven sourcing','4. Structured interviews and calibration','5. Weekly feedback and continuous improvement'])
          .map((item) => <div className='card' key={item}>{item}</div>)}
      </div></div></section>

      <section id='capabilities'><div className='container'><h2>{t('sections.capabilities')}</h2><div className='grid grid-2'>
        <div className='card'>Fullstack Engineers + AI-assisted delivery</div>
        <div className='card'>DevOps & Cloud Architects (AWS/GCP/Azure)</div>
      </div></div></section>

      <section id='faq'><div className='container'><h2>{t('sections.faq')}</h2><div className='grid'>
        <details className='card'><summary>{locale === 'es' ? '¿Trabajan con SLA y visibilidad?' : 'Do you work with SLA and visibility?'}</summary><p className='muted'>{locale === 'es' ? 'Sí. Definimos SLA por etapa y compartimos pipeline real en todo momento.' : 'Yes. We define stage-level SLA and share real-time pipeline visibility.'}</p></details>
        <details className='card'><summary>{locale === 'es' ? '¿Pueden trabajar con nuestro equipo interno?' : 'Can you collaborate with our internal team?'}</summary><p className='muted'>{locale === 'es' ? 'Sí. Nos integramos como extensión operativa de Talent/Engineering.' : 'Yes. We integrate as an operational extension of Talent/Engineering.'}</p></details>
      </div></div></section>

      <section id='about'><div className='container'><h2>{t('sections.about')}</h2>
        <p className='muted'>{locale === 'es' ? 'Somos un equipo senior en recruiting tech y resourcing. Priorizamos claridad, métricas accionables y comunicación directa.' : 'We are a senior tech recruiting and resourcing team. We prioritize clarity, actionable metrics and direct communication.'}</p>
      </div></section>

      <section id='contact'><div className='container'><h2>{t('sections.contact')}</h2>
        <form className='grid' onSubmit={handleSubmit}>
          <label>{t('form.name')}<input required name='name' /></label>
          <label>{t('form.company')}<input required name='company' /></label>
          <label>{t('form.email')}<input type='email' required name='email' /></label>
          <label>{t('form.need')}<input required name='need' /></label>
          <label>{t('form.message')}<textarea required name='message' rows={4} /></label>
          <input name='website' className='hidden' tabIndex={-1} autoComplete='off' />
          <button className='btn primary' type='submit'>{status === 'loading' ? t('form.sending') : t('form.send')}</button>
          {status === 'ok' && <small>{t('form.ok')}</small>}
          {status === 'error' && <small>{t('form.error')}</small>}
        </form>
      </div></section>
    </>
  );
}
