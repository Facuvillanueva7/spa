import { EnvelopeSimple, Phone, MapPin, LinkedinLogo, GithubLogo } from './icons.jsx';

export default function Contact({ email, phone, location, social }) {
  return (
    <div className="contact">
      <div className="contact__card">
        <h3>Hablemos</h3>
        <p>
          Si quieres colaborar en un proyecto o conocer más sobre mi experiencia, estaré encantada de
          conversar.
        </p>
        <ul>
          <li>
            <EnvelopeSimple size={18} />
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <Phone size={18} />
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
          <li>
            <MapPin size={18} /> {location}
          </li>
        </ul>
      </div>
      <div className="contact__social">
        <h4>Redes profesionales</h4>
        <ul>
          <li>
            <LinkedinLogo size={18} />
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <GithubLogo size={18} />
            <a href={social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
