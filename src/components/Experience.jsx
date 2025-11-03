import { useMemo, useState } from 'react';
import { CalendarBlank, MapPin, Buildings } from './icons.jsx';

const filters = [
  { id: 'all', label: 'Todas' },
  { id: 'frontend', label: 'Front-end' },
  { id: 'leadership', label: 'Liderazgo' },
  { id: 'freelance', label: 'Freelance' }
];

export default function Experience({ experience }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(experience[0]?.id);

  const filteredExperience = useMemo(() => {
    if (selectedFilter === 'all') return experience;
    return experience.filter((item) => item.tags.includes(selectedFilter));
  }, [experience, selectedFilter]);

  return (
    <div className="experience">
      <div className="experience__filters" role="tablist" aria-label="Filtros de experiencia">
        {filters.map((filter) => (
          <button
            key={filter.id}
            role="tab"
            className={selectedFilter === filter.id ? 'chip chip--active' : 'chip'}
            onClick={() => setSelectedFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="experience__list">
        {filteredExperience.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <article key={item.id} className={isExpanded ? 'experience__card experience__card--active' : 'experience__card'}>
              <header onClick={() => setExpandedId(isExpanded ? null : item.id)}>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience__company">
                    <Buildings size={16} /> {item.company}
                  </p>
                </div>
                <div className="experience__meta">
                  <span><CalendarBlank size={16} /> {item.period}</span>
                  <span><MapPin size={16} /> {item.location}</span>
                </div>
              </header>
              {isExpanded && (
                <div className="experience__details">
                  <ul>
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="experience__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
