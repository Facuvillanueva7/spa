import { GraduationCap, Certificate } from './icons.jsx';

export default function Education({ education, certifications }) {
  return (
    <div className="education">
      <div className="education__list">
        {education.map((item) => (
          <article key={item.institution} className="education__item">
            <div className="education__icon">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3>{item.degree}</h3>
              <p className="education__institution">{item.institution}</p>
              <p className="education__period">{item.period}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="education__certifications">
        <h3>Certificaciones destacadas</h3>
        <ul>
          {certifications.map((cert) => (
            <li key={cert.name}>
              <Certificate size={18} /> {cert.name} — <span>{cert.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
