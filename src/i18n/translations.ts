import type { Locale } from '../types';

export const translations = {
  es: {
    brand: 'AI Data Recruitment',
    nav: {
      services: 'Servicios',
      process: 'Proceso',
      capabilities: 'Capacidades',
      faq: 'FAQ',
      about: 'Nosotros',
      contact: 'Contacto',
      blog: 'Blog',
      admin: 'Admin'
    },
    hero: {
      badge: 'Recruitment y Resourcing AI/Data-driven',
      title: 'Talento tech que acelera roadmap desde la semana uno.',
      subtitle: 'Staff Augmentation y Talent Mapping con criterio de datos, foco en fit real y ejecución sin vueltas.',
      whatsapp: 'Hablar por WhatsApp',
      email: 'Enviar email'
    },
    sections: {
      services: 'Servicios',
      process: 'Cómo trabajamos',
      capabilities: 'Capacidades',
      faq: 'Preguntas frecuentes',
      about: 'Sobre nosotros',
      contact: 'Hablemos'
    },
    form: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Email',
      need: 'Necesidad',
      message: 'Mensaje',
      send: 'Enviar consulta',
      sending: 'Enviando...',
      ok: 'Gracias. Te respondemos en menos de 24 hs hábiles.',
      error: 'No pudimos enviar tu consulta. Intentá de nuevo.'
    },
    legal: {
      privacyTitle: 'Política de Privacidad',
      cookiesTitle: 'Política de Cookies',
      disclaimer: 'Texto informativo general. No constituye asesoramiento legal.'
    },
    cookies: {
      text: 'Usamos cookies para recordar idioma y consentimiento. Podés cambiarlo cuando quieras.',
      accept: 'Aceptar',
      reject: 'Rechazar'
    },
    footer: '© {{year}} AI Data Recruitment. Transparencia, SLA y ejecución.'
  },
  en: {
    brand: 'AI Data Recruitment',
    nav: {
      services: 'Services',
      process: 'Process',
      capabilities: 'Capabilities',
      faq: 'FAQ',
      about: 'About',
      contact: 'Contact',
      blog: 'Blog',
      admin: 'Admin'
    },
    hero: {
      badge: 'AI/Data-driven Recruitment and Resourcing',
      title: 'Tech talent that accelerates your roadmap from week one.',
      subtitle: 'Staff Augmentation and Talent Mapping with data-informed criteria, real fit and fast execution.',
      whatsapp: 'Chat on WhatsApp',
      email: 'Send email'
    },
    sections: {
      services: 'Services',
      process: 'How we work',
      capabilities: 'Capabilities',
      faq: 'Frequently asked questions',
      about: 'About us',
      contact: "Let's talk"
    },
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      need: 'Need',
      message: 'Message',
      send: 'Send inquiry',
      sending: 'Sending...',
      ok: 'Thanks. We reply in less than 24 business hours.',
      error: 'We could not send your inquiry. Please try again.'
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      cookiesTitle: 'Cookies Policy',
      disclaimer: 'General informational text. It is not legal advice.'
    },
    cookies: {
      text: 'We use cookies to remember language and consent. You can change it anytime.',
      accept: 'Accept',
      reject: 'Reject'
    },
    footer: '© {{year}} AI Data Recruitment. Transparency, SLA and execution.'
  }
} as const;

export type TranslationSchema = typeof translations.es;

export const detectLocale = (): Locale =>
  navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
