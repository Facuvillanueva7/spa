import { GithubLogo, LinkedinLogo, ArrowUp } from './icons.jsx';

export default function Footer({ name, socialLinks, sections, onNavigate }) {
  return (
    <footer className="footer">
      <div>
        <p className="footer__name">{name}</p>
        <p className="footer__tagline">Diseñando experiencias digitales centradas en las personas.</p>
      </div>
      <div className="footer__links">
        <h4>Secciones</h4>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button onClick={() => onNavigate(section.id)}>{section.label}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__social">
        <h4>Conecta</h4>
        <ul>
          <li>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <LinkedinLogo size={18} /> LinkedIn
            </a>
          </li>
          <li>
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <GithubLogo size={18} /> GitHub
            </a>
          </li>
        </ul>
        <button className="icon-button" onClick={() => onNavigate('sobre-mi')} aria-label="Volver arriba">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
