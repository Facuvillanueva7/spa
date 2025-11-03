import { useMemo, useState } from 'react';
import {
  EnvelopeSimple,
  GithubLogo,
  MapPin,
  Moon,
  Sun,
  DownloadSimple
} from './components/icons.jsx';
import profile from './data/profile.js';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Section from './components/Section.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

const sections = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'educacion', label: 'Educación' },
  { id: 'contacto', label: 'Contacto' }
];

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('sobre-mi');

  const themeClass = useMemo(() => (theme === 'light' ? 'theme-light' : 'theme-dark'), [theme]);

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([profile.downloadableSummary], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Laura-Martinez-CV.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`app ${themeClass}`}>
      <header className="top-bar">
        <div className="top-bar__brand" onClick={() => handleScrollTo('sobre-mi')}>
          <span className="top-bar__avatar">LM</span>
          <span className="top-bar__name">Laura Martínez</span>
        </div>
        <nav className="top-bar__nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={activeSection === section.id ? 'nav-link nav-link--active' : 'nav-link'}
              onClick={() => handleScrollTo(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
        <div className="top-bar__actions">
          <button className="icon-button" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button className="primary-button" onClick={handleDownload}>
            <DownloadSimple size={18} weight="bold" />
            <span>Descargar CV</span>
          </button>
        </div>
      </header>

      <main>
        <Hero profile={profile} onNavigate={handleScrollTo} />

        <Section id="sobre-mi" title="Sobre mí" icon={<MapPin size={24} />}>
          <p className="lead">{profile.summary}</p>
          <div className="about-grid">
            <div>
              <h3>Lo que busco</h3>
              <p>{profile.objective}</p>
            </div>
            <div>
              <h3>Valores</h3>
              <ul>
                {profile.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experiencia" title="Experiencia" icon={<GithubLogo size={24} />}>
          <Experience experience={profile.experience} />
        </Section>

        <Section id="habilidades" title="Habilidades" icon={<Sun size={24} />}>
          <Skills skills={profile.skills} />
        </Section>

        <Section id="educacion" title="Educación" icon={<Moon size={24} />}>
          <Education education={profile.education} certifications={profile.certifications} />
        </Section>

        <Section id="contacto" title="Contacto" icon={<EnvelopeSimple size={24} />}>
          <Contact
            email={profile.contact.email}
            phone={profile.contact.phone}
            location={profile.contact.location}
            social={profile.contact.social}
          />
        </Section>
      </main>

      <Footer
        name="Laura Martínez"
        socialLinks={profile.contact.social}
        onNavigate={handleScrollTo}
        sections={sections}
      />
    </div>
  );
}
