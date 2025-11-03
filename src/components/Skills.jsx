import { useMemo, useState } from 'react';
import { Sparkle } from './icons.jsx';

export default function Skills({ skills }) {
  const categories = useMemo(() => Object.keys(skills), [skills]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSkill, setSelectedSkill] = useState(skills[categories[0]][0]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSkill(skills[category][0]);
  };

  return (
    <div className="skills">
      <div className="skills__categories" role="tablist" aria-label="Categorías de habilidades">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            className={selectedCategory === category ? 'chip chip--active' : 'chip'}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills__content">
        <ul className="skills__list">
          {skills[selectedCategory].map((skill) => (
            <li key={skill.name}>
              <button
                className={selectedSkill.name === skill.name ? 'skill-button skill-button--active' : 'skill-button'}
                onClick={() => setSelectedSkill(skill)}
              >
                <Sparkle size={16} /> {skill.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="skills__detail">
          <h3>{selectedSkill.name}</h3>
          <p>{selectedSkill.description}</p>
          <div className="skills__level" aria-label="Nivel de dominio">
            {[1, 2, 3, 4, 5].map((level) => (
              <span key={level} className={level <= selectedSkill.level ? 'dot dot--active' : 'dot'} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
