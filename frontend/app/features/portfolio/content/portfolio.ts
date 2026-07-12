import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Ricardo Rojas',
    role: 'Junior Full Stack Developer',
    location: 'Cochabamba, Bolivia',
    email: 'ricardo.rojas.carvajal@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ricardo-rojas-carvajal-b3a691204',
    github: 'https://github.com/Richi78',
    summary: 'Passionate about building web applications. ICPC Regional Contestant with a strong background in algorithms. Experienced in agile environments (Scrum, Nexus, XP) and collaborative development.'
  },
  about: {
    paragraphs: [
      'I am a junior developer eager to learn and grow in the world of web development. I am interested in both frontend and especially backend, and I enjoy creating projects that solve real problems.',
      'During my training I have worked with a wide range of technologies, which has made me highly adaptable. I consider myself a curious, proactive person with attention to detail.',
      'I am currently looking for opportunities where I can add value, keep learning from more experienced teams, and continue improving my technical skills.'
    ]
  },

  skills: [
    {
      category: 'Frontend',
      items: ['React', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Prisma', 'Zod', 'JWT', 'Python', 'Django', 'Java', 'Spring Boot', 'Go']
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Bruno', 'Docker', 'Opencode']
    },
    {
      category: 'Methodologies',
      items: ['Scrum', 'Kanban', 'Nexus', 'XP']
    }
  ],

  projects: [
    {
      title: 'TuCasa - Real Estate Platform',
      description: 'A platform that allows users to list properties for rent or sale, as well as search for available properties. Includes user authentication, property management, and real estate agent support.',
      technologies: ['React', 'Spring Boot', 'PostgreSQL'],
      repoUrl: 'https://github.com/Frosmin/TuCasa'
    },
    {
      title: 'PyLearn - Learning Platform',
      description: 'An educational platform that lets users learn Python through interactive lessons and hands-on exercises, including a sandbox to run code in real time.',
      technologies: ['Angular', 'Go', 'PostgreSQL', 'Docker'],
      repoUrl: 'https://github.com/Frosmin/Generacion-Software'
    },
    {
      title: 'TisTracker - Student Management System',
      description: 'A system that helps teachers manage student groups, generate assessments and performance reports, and allows students to view their grades and progress.',
      technologies: ['React', 'Laravel', 'PostgreSQL', 'Docker'],
      repoUrl: 'https://github.com/Api-programming-company/TisTracker'
    },
    {
      title: 'Friender - Platform for Renting Friends',
      description: 'This platform allows users to rent friends for various social activities such as going out to eat, watching a movie, or simply spending time together. Includes user profiles, a booking system, and ratings.',
      technologies: ['React', 'Django Rest Framework', 'PostgreSQL'],
      repoUrl: 'https://github.com/BitBudies/Friender'
    }
  ],

  experience: [
    {
      role: 'Full Stack Developer',
      company: 'UNICEN',
      location: 'Cochabamba, Bolivia',
      startDate: 'Feb 2026',
      endDate: 'Jun 2026',
      description: [
        'Development of a complete system under NDA.',
        'SPA using Vue 3, Pinia, and Vue Router.',
        'REST API with Express, Prisma, PostgreSQL, and Zod.',
        'API Key management for external systems.'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'Bloomnovatech Innovator',
      location: 'Cochabamba, Bolivia',
      startDate: 'Mar 2024',
      endDate: 'Jun 2024',
      description: [
        'Collaborated on software development projects under NDA.',
        'Technologies used: React, Python, and PostgreSQL.'
      ]
    }
  ],

  education: [
    {
      degree: 'Bachelor\'s Degree in Computer Engineering (In progress)',
      institution: 'Universidad Mayor de San Simón',
      year: '2023 - 2026',
      description: 'Specialization in software and web application development.'
    },
    {
      degree: 'English C2',
      institution: 'EF SET (online)',
      year: '2026',
      description: 'Advanced English certification.'
    },
    {
      degree: 'ICPC Regional Contestant',
      institution: 'ICPC Bolivia',
      year: '2025',
      description: 'Regional contestant in the world\'s largest programming competition.'
    },
    {
      degree: 'Hackathon Byte Back 2nd Place',
      institution: 'Microsoft Learn Student Ambassadors',
      year: '2026',
      description: 'Second place with a Chrome extension that detects hostile intent using artificial intelligence.'
    }
  ]
}
