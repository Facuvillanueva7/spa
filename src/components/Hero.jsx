import { Briefcase, GlobeSimple, GraduationCap, MapPin } from './icons.jsx';

export default function Hero({ profile, onNavigate }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Hola, soy</p>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__meta">
          <span><MapPin size={18} /> {profile.contact.location}</span>
          <span><Briefcase size={18} /> {profile.experience.length}+ experiencias</span>
          <span><GraduationCap size={18} /> {profile.education[0].degree}</span>
          <span><GlobeSimple size={18} /> Español / Inglés</span>
        </div>
        <div className="hero__cta">
          <button className="primary-button" onClick={() => onNavigate('contacto')}>
            Conversemos
          </button>
          <button className="secondary-button" onClick={() => onNavigate('experiencia')}>
            Ver trayectoria
          </button>
        </div>
      </div>
      <div className="hero__card" aria-hidden>
        <div className="hero__avatar">LM</div>
        <ul>
          {profile.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
