const profile = {
  name: 'Laura Martínez',
  title: 'Desarrolladora Front-end Senior',
  intro:
    'Especialista en construir experiencias web accesibles y performantes, con enfoque en diseño centrado en las personas y equipos multidisciplinarios.',
  summary:
    'Tengo más de 8 años desarrollando productos digitales para empresas SaaS y startups. Disfruto guiando equipos hacia soluciones escalables que deleiten a los usuarios.',
  objective:
    'Busco liderar la capa front-end de un producto global donde pueda impulsar buenas prácticas, mentoría y métricas de experiencia.',
  values: ['Empatía', 'Aprendizaje continuo', 'Colaboración', 'Iteración rápida'],
  highlights: [
    'Mentora en comunidades tech',
    'Premio a la innovación 2023',
    'Speaker en JSConf Latam',
    'Diseño centrado en personas'
  ],
  downloadableSummary: `Laura Martínez - Desarrolladora Front-end Senior\n\nExperiencia destacada:\n- Lideré la migración a micro-frontends en AuroraTech, mejorando en 35% la velocidad de despliegue.\n- Creé un sistema de diseño accesible adoptado por 6 equipos cross-funcionales.\n- Como freelance, desarrollé soluciones web optimizadas para e-commerce y fintech.\n\nHabilidades clave:\n- React, TypeScript, Vite, Testing Library\n- Arquitectura front-end, performance, accesibilidad\n- Liderazgo técnico, mentoría de equipos\n\nContacto:\n- laura.martinez.dev@gmail.com\n- +34 600 123 456\n- Madrid, España`,
  experience: [
    {
      id: 'auroratech',
      role: 'Tech Lead Front-end',
      company: 'AuroraTech',
      period: '2021 - Actualidad',
      location: 'Remoto · Madrid',
      tags: ['frontend', 'leadership'],
      achievements: [
        'Dirigí un equipo de 6 desarrolladores en la implementación de micro-frontends con Module Federation.',
        'Definí estándares de accesibilidad AA y flujos de testing que redujeron los bugs de producción en 42%.',
        'Colaboré con UX research para construir journeys de onboarding que aumentaron la activación en 28%.'
      ]
    },
    {
      id: 'zenpay',
      role: 'Senior Front-end Engineer',
      company: 'ZenPay',
      period: '2018 - 2021',
      location: 'Híbrido · Barcelona',
      tags: ['frontend'],
      achievements: [
        'Migré la plataforma a React con TypeScript, reduciendo el tiempo de carga inicial en 55%.',
        'Introduje métricas de Web Vitals y dashboards que visualizaron la salud del front-end en tiempo real.',
        'Mentoricé a 4 desarrolladores juniors que hoy lideran squads front-end.'
      ]
    },
    {
      id: 'freelance',
      role: 'Consultora Front-end Freelance',
      company: 'Diversos clientes',
      period: '2016 - 2018',
      location: 'Remoto',
      tags: ['freelance'],
      achievements: [
        'Diseñé y desarrollé sitios e-commerce headless con Shopify + Next.js orientados a conversiones.',
        'Implementé estrategias de performance budget reduciendo en promedio 1.2s el LCP de los proyectos.',
        'Coordiné talleres con stakeholders para alinear objetivos de producto y factibilidad técnica.'
      ]
    }
  ],
  skills: {
    Tecnología: [
      {
        name: 'React & Ecosistema',
        level: 5,
        description:
          'Experiencia construyendo aplicaciones SPA con React, hooks avanzados, React Query y patrones de arquitectura moderna.'
      },
      {
        name: 'TypeScript',
        level: 4,
        description:
          'Diseño de tipados complejos, definición de contratos API y herramientas para DX eficiente.'
      },
      {
        name: 'Testing de UI',
        level: 4,
        description:
          'Implementación de pruebas unitarias y end-to-end con Testing Library, Vitest y Playwright.'
      }
    ],
    Producto: [
      {
        name: 'Design Systems',
        level: 5,
        description:
          'Creación y mantenimiento de librerías de componentes documentadas con Storybook y tokens de diseño.'
      },
      {
        name: 'UX Collaboration',
        level: 4,
        description:
          'Trabajo cercano con investigación de usuario para iterar hipótesis basadas en datos y feedback cualitativo.'
      },
      {
        name: 'Métricas & Experimentación',
        level: 4,
        description:
          'Definición de KPIs, análisis de experimentos A/B y uso de analytics para priorizar mejoras.'
      }
    ],
    Liderazgo: [
      {
        name: 'Mentoría Técnica',
        level: 5,
        description:
          'Planes de crecimiento personalizados y talleres internos que fortalecen habilidades del equipo.'
      },
      {
        name: 'Estrategia Front-end',
        level: 4,
        description:
          'Roadmaps técnicos alineados con objetivos de negocio y deuda técnica controlada.'
      },
      {
        name: 'Facilitación',
        level: 4,
        description:
          'Conducción de dinámicas de descubrimiento, retrospectivas y sesiones de ideación.'
      }
    ]
  },
  education: [
    {
      institution: 'Universidad Politécnica de Madrid',
      degree: 'Grado en Ingeniería de Software',
      period: '2011 - 2015',
      description: 'Proyecto final orientado a accesibilidad web y componentes reutilizables.'
    }
  ],
  certifications: [
    {
      name: 'Google UX Design Specialization',
      issuer: 'Coursera · 2022'
    },
    {
      name: 'Front-end Architecture & Testing',
      issuer: 'Frontend Masters · 2021'
    },
    {
      name: 'Design Systems Masterclass',
      issuer: 'DesignBetter · 2020'
    }
  ],
  contact: {
    email: 'laura.martinez.dev@gmail.com',
    phone: '+34600123456',
    location: 'Madrid, España',
    social: {
      linkedin: 'https://www.linkedin.com/in/lauramartinezdev',
      github: 'https://github.com/lauramartinez'
    }
  }
};

export default profile;
