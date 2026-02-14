import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { detectLocale, translations } from './translations';
import type { Locale } from '../types';

type I18nContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (keyPath: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function resolve(obj: unknown, keyPath: string): string | undefined {
  const value = keyPath.split('.').reduce<any>((acc, key) => acc?.[key], obj as any);
  return typeof value === 'string' ? value : undefined;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const persisted = localStorage.getItem('locale') as Locale | null;
    return persisted === 'es' || persisted === 'en' ? persisted : detectLocale();
  });

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale: (next) => {
      localStorage.setItem('locale', next);
      setLocaleState(next);
    },
    t: (keyPath, vars) => {
      const base = resolve(translations[locale], keyPath) ?? keyPath;
      if (!vars) return base;
      return Object.entries(vars).reduce(
        (acc, [k, v]) => acc.replace(`{{${k}}}`, String(v)),
        base
      );
    }
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
