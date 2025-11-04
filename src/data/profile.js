// src/data/profile.js
export const profile = {
  name: "Facundo Villanueva",
  headline: "HR Recruiter & Tech enthusiastic",
  location: "Salta, AR",
  email: "facuvillanuevsa1@gmail.com",
  links: {
    github: "https://github.com/Facuvillanueva7",
    linkedin: "https://www.linkedin.com/in/tu-perfil",
  },
  summary: "Recruiting/DevOps learner. Construyendo SPA como CV vivo.",
  skills: [
    { name: ".NET / C#", level: 3 },
    { name: "React + Vite", level: 2 },
    { name: "DevOps (CI/CD, Docker, Codespaces)", level: 2 }
  ],
  experience: [
    {
      company: "JBK",
      role: "Recruiting & Automation",
      start: "2024-01",
      end: "Presente",
      bullets: [
        "Diseño de pipelines y automatizaciones con Make/Notion/GPT.",
        "Dashboards de métricas de hiring (time-to-fill, aceptación, etc.)."
      ]
    }
  ],
  projects: [
    { name: "SPA Live CV", link: "https://github.com/Facuvillanueva7/spa", tags: ["React","Vite"] },
  ],
  education: [
    { title: "Autodidacta DevOps/React", org: "Cursos + práctica", year: "2025" }
  ]
};
