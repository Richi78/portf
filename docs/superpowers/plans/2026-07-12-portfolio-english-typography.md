# Portfolio English Content & Typography Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Translate all portfolio content to English and slightly increase font sizes while keeping the current font family.

**Architecture:** Content lives in `frontend/app/features/portfolio/content/portfolio.ts`; section titles and UI labels are hardcoded in Vue SFCs. Typography is controlled by `global.css` and per-component CSS modules. We update content files, SFC strings, and font-size values without changing component structure or color palette.

**Tech Stack:** Nuxt 3, Vue 3 Composition API, TypeScript, CSS modules.

---

## File Map

- `frontend/app/features/portfolio/content/portfolio.ts` — all portfolio data (profile, about, skills, projects, experience, education).
- `frontend/app/features/portfolio/components/PortfolioHero.vue` — hero text and CTAs.
- `frontend/app/features/portfolio/components/PortfolioHeader.vue` — navigation labels and aria labels.
- `frontend/app/features/portfolio/components/PortfolioAbout.vue` — section title.
- `frontend/app/features/portfolio/components/PortfolioSkills.vue` — section title.
- `frontend/app/features/portfolio/components/PortfolioProjects.vue` — section title, placeholder text, link labels.
- `frontend/app/features/portfolio/components/PortfolioExperience.vue` — section title.
- `frontend/app/features/portfolio/components/PortfolioEducation.vue` — section title.
- `frontend/app/features/portfolio/components/PortfolioContact.vue` — section title, subtitle, link labels, aria labels.
- `frontend/app/features/portfolio/components/PortfolioFooter.vue` — copyright text.
- `frontend/app/assets/css/global.css` — global type scale and CSS variables.
- `frontend/app/features/portfolio/styles/*.module.css` — component-level font sizes.

---

### Task 1: Translate portfolio content data

**Files:**
- Modify: `frontend/app/features/portfolio/content/portfolio.ts`
- May install dev dependencies needed for type checking (`typescript`, `vue-tsc`) if not already present.

- [ ] **Step 1: Replace the file content with the English version**

```typescript
import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Ricardo Rojas',
    role: 'Junior Full Stack Developer',
    location: 'Cochabamba, Bolivia',
    email: 'ricardo.rojas.carvajal@gmail.com',
    linkedin: 'www.linkedin.com/in/ricardo-rojas-carvajal-b3a691204',
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
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd frontend && npm run typecheck` (or `npx nuxt typecheck` if `typecheck` script is unavailable)
Expected: no errors related to `portfolio.ts`.

---

### Task 2: Translate PortfolioHero.vue strings

**Files:**
- Modify: `frontend/app/features/portfolio/components/PortfolioHero.vue`

- [ ] **Step 1: Replace Spanish strings with English**

```vue
<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'
import styles from '../styles/PortfolioHero.module.css'

const { profile } = usePortfolio()
</script>

<template>
  <section id="home" :class="styles.hero">
    <div :class="styles.container">
      <div :class="styles.content">
        <div :class="styles.text">
          <p :class="styles.greeting">Hi, I'm</p>
          <h1 :class="styles.name">{{ profile.name }}</h1>
          <p :class="styles.role">{{ profile.role }}</p>
          <p :class="styles.summary">{{ profile.summary }}</p>

          <div :class="styles.actions">
            <a href="#projects" :class="styles.primaryButton">
              View projects
            </a>
            <a href="/cv.pdf" download :class="styles.secondaryButton">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div :class="styles.imageWrapper">
          <div :class="styles.placeholderImage">
            Your photo here
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Update navigation target IDs**

Note: the primary button now links to `#projects`, so ensure `PortfolioProjects.vue` section ID is updated to `id="projects"` in Task 5.

---

### Task 3: Translate PortfolioHeader.vue strings and navigation targets

**Files:**
- Modify: `frontend/app/features/portfolio/components/PortfolioHeader.vue`

- [ ] **Step 1: Update navLinks, aria-labels, and logo**

Replace the `<script setup>` block with:

```vue
<script setup lang="ts">
import { shallowRef, onMounted, onUnmounted } from 'vue'
import { useActiveSection } from '../composables/useActiveSection'
import styles from '../styles/PortfolioHeader.module.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]

const sectionIds = navLinks.map((link) => link.id)
const { activeSection } = useActiveSection(sectionIds)
const isScrolled = shallowRef(false)
const isMobileMenuOpen = shallowRef(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  if (typeof window === 'undefined') return
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  if (typeof window === 'undefined') return
  window.removeEventListener('scroll', handleScroll)
})
</script>
```

Replace the `<template>` block with:

```vue
<template>
  <header :class="[styles.header, isScrolled ? styles.headerScrolled : '']">
    <div :class="styles.container">
      <a href="#home" :class="styles.logo">
        Your<span :class="styles.logoAccent">Portfolio</span>
      </a>

      <nav :class="styles.nav" aria-label="Main navigation">
        <ul :class="styles.navList">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              :class="[styles.navLink, activeSection === link.id ? styles.navLinkActive : '']"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button
        :class="styles.menuButton"
        aria-label="Open menu"
        :aria-expanded="isMobileMenuOpen"
        @click="toggleMobileMenu"
      >
        <svg v-if="!isMobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <div v-if="isMobileMenuOpen" :class="styles.mobileMenu">
      <ul :class="styles.mobileNavList">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            :class="[styles.mobileNavLink, activeSection === link.id ? styles.mobileNavLinkActive : '']"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
```

---

### Task 4: Translate PortfolioAbout.vue section title and update ID

**Files:**
- Modify: `frontend/app/features/portfolio/components/PortfolioAbout.vue`

- [ ] **Step 1: Update section ID and title**

```vue
<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'
import styles from '../styles/PortfolioAbout.module.css'

const { about } = usePortfolio()
</script>

<template>
  <section id="about" :class="[styles.about, 'reveal']">
    <div :class="styles.container">
      <div :class="styles.content">
        <h2 :class="styles.title">
          About <span class="sectionTitleAccent">me</span>
        </h2>

        <div :class="styles.paragraphs">
          <p
            v-for="(paragraph, index) in about.paragraphs"
            :key="index"
            :class="styles.paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
```

---

### Task 5: Translate PortfolioProjects.vue section title and update ID

**Files:**
- Modify: `frontend/app/features/portfolio/components/PortfolioProjects.vue`

- [ ] **Step 1: Update section ID, title, placeholder, and link labels**

```vue
<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'
import styles from '../styles/PortfolioProjects.module.css'

const { projects } = usePortfolio()
</script>

<template>
  <section id="projects" :class="[styles.projects, 'reveal']">
    <div :class="styles.container">
      <h2 :class="styles.title">
        <span class="sectionTitleAccent">Featured</span> projects
      </h2>

      <div :class="styles.grid">
        <article
          v-for="project in projects"
          :key="project.title"
          :class="styles.card"
        >
          <div :class="styles.imageWrapper">
            Project image
          </div>

          <div :class="styles.content">
            <h3 :class="styles.projectTitle">{{ project.title }}</h3>
            <p :class="styles.description">{{ project.description }}</p>

            <ul :class="styles.technologies">
              <li
                v-for="tech in project.technologies"
                :key="tech"
                :class="styles.technology"
              >
                {{ tech }}
              </li>
            </ul>

            <div :class="styles.links">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                :class="styles.link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Demo
              </a>
              <a
                v-if="project.repoUrl"
                :href="project.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                :class="styles.link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Code
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
```

---

### Task 6: Translate PortfolioExperience.vue section title and update ID

**Files:**
- Modify: `frontend/app/features/portfolio/components/PortfolioExperience.vue`

- [ ] **Step 1: Update section ID and title**

```vue
<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'
import styles from '../styles/PortfolioExperience.module.css'

const { experience } = usePortfolio()
</script>

<template>
  <section id="experience" :class="[styles.experience, 'reveal']">
    <div :class="styles.container">
      <h2 :class="styles.title">
        Work <span class="sectionTitleAccent">experience</span>
      </h2>

      <div :class="styles.timeline">
        <article
          v-for="job in experience"
          :key="`${job.company}-${job.startDate}`"
          :class="styles.item"
        >
          <div :class="styles.header">
            <h3 :class="styles.role">{{ job.role }}</h3>
            <p :class="styles.company">{{ job.company }}</p>
          </div>

          <div :class="styles.meta">
            <span :class="styles.dates">{{ job.startDate }} — {{ job.endDate }}</span>
            <span>{{ job.location }}</span>
          </div>

          <ul :class="styles.description">
            <li
              v-for="(item, index) in job.description"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
```

---

### Task 7: Translate PortfolioEducation.vue section title and update ID

**Files:**
- Modify: `frontend/app/features/portfolio/components/PortfolioEducation.vue`

- [ ] **Step 1: Update section ID and title**

```vue
<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'
import styles from '../styles/PortfolioEducation.module.css'

const { education } = usePortfolio()
</script>

<template>
  <section id="education" :class="[styles.education, 'reveal']">
    <div :class="styles.container">
      <h2 :class="styles.title">
        Education & <span class="sectionTitleAccent">certifications</span>
      </h2>

      <div :class="styles.grid">
        <article
          v-for="item in education"
          :key="`${item.institution}-${item.year}`"
          :class="styles.card"
        >
          <div :class="styles.header">
            <h3 :class="styles.degree">{{ item.degree }}</h3>
            <p :class="styles.institution">{{ item.institution }}</p>
          </div>

          <p :class="styles.year">{{ item.year }}</p>
          <p v-if="item.description" :class="styles.description">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
```

---

### Task 8: Translate PortfolioContact.vue section title, subtitle, and labels

**Files:**
- Modify: `frontend/app/features/portfolio/components/PortfolioContact.vue`

- [ ] **Step 1: Update section ID, title, subtitle, and link labels**

```vue
<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'
import styles from '../styles/PortfolioContact.module.css'

const { profile } = usePortfolio()
</script>

<template>
  <section id="contact" :class="[styles.contact, 'reveal']">
    <div :class="styles.container">
      <h2 :class="styles.title">
        <span class="sectionTitleAccent">Contact</span>
      </h2>

      <p :class="styles.subtitle">
        If you want to talk about an opportunity, a project, or just say hi, I'll be happy to hear from you.
      </p>

      <a :href="`mailto:${profile.email}`" :class="styles.email">
        {{ profile.email }}
      </a>

      <div :class="styles.links">
        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          :class="styles.link"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        <a
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
          :class="styles.link"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          GitHub
        </a>

        <a
          :href="`/cv.pdf`"
          download
          :class="styles.link"
          aria-label="Download CV"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </div>
    </div>
  </section>
</template>
```

---

### Task 9: Translate PortfolioFooter.vue copyright text

**Files:**
- Modify: `frontend/app/features/portfolio/components/PortfolioFooter.vue`

- [ ] **Step 1: Update copyright text**

```vue
<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'
import styles from '../styles/PortfolioFooter.module.css'

const { profile } = usePortfolio()
</script>

<template>
  <footer :class="styles.footer">
    <div :class="styles.container">
      <p :class="styles.text">
        © {{ new Date().getFullYear() }} <span :class="styles.name">{{ profile.name }}</span>. All rights reserved.
      </p>
    </div>
  </footer>
</template>
```

---

### Task 10: Translate PortfolioSkills.vue section title and update ID

**Files:**
- Modify: `frontend/app/features/portfolio/components/PortfolioSkills.vue`

- [ ] **Step 1: Update section ID and title**

```vue
<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'
import styles from '../styles/PortfolioSkills.module.css'

const { skills } = usePortfolio()
</script>

<template>
  <section id="skills" :class="[styles.skills, 'reveal']">
    <div :class="styles.container">
      <h2 :class="styles.title">
        <span class="sectionTitleAccent">Skills</span> & technologies
      </h2>

      <div :class="styles.grid">
        <article
          v-for="skillGroup in skills"
          :key="skillGroup.category"
          :class="styles.card"
        >
          <h3 :class="styles.category">{{ skillGroup.category }}</h3>
          <ul :class="styles.items">
            <li
              v-for="item in skillGroup.items"
              :key="item"
              :class="styles.item"
            >
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
```

---

### Task 11: Bump global typography sizes

**Files:**
- Modify: `frontend/app/assets/css/global.css`

- [ ] **Step 1: Update body font-size and section title scale**

Replace the relevant sections in `global.css`:

```css
body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  font-size: 1.125rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

And:

```css
.sectionTitle {
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
  color: var(--color-text);
}

@media (min-width: 768px) {
  :root {
    --section-padding-y: 8rem;
    --container-padding-x: 2rem;
  }

  .sectionTitle {
    font-size: 2.75rem;
  }
}
```

- [ ] **Step 2: Verify global.css has no syntax errors**

Run: `cd frontend && npm run dev` briefly or use a CSS linter.
Expected: dev server starts without CSS parse errors.

---

### Task 12: Bump component module font sizes

**Files:**
- Modify: `frontend/app/features/portfolio/styles/PortfolioHero.module.css`
- Modify: `frontend/app/features/portfolio/styles/PortfolioHeader.module.css`
- Modify: `frontend/app/features/portfolio/styles/PortfolioFooter.module.css`
- Modify: `frontend/app/features/portfolio/styles/PortfolioAbout.module.css`
- Modify: `frontend/app/features/portfolio/styles/PortfolioExperience.module.css`
- Modify: `frontend/app/features/portfolio/styles/PortfolioEducation.module.css`
- Modify: `frontend/app/features/portfolio/styles/PortfolioProjects.module.css`
- Modify: `frontend/app/features/portfolio/styles/PortfolioSkills.module.css`
- Modify: `frontend/app/features/portfolio/styles/PortfolioContact.module.css`

- [ ] **Step 1: Update PortfolioHero.module.css**

```css
.greeting {
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 400;
  color: var(--color-accent);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.name {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.role {
  font-family: var(--font-body);
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.summary {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 540px;
  margin-bottom: 2rem;
}

.primaryButton,
.secondaryButton {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  transition: transform var(--transition-fast), background-color var(--transition-fast), color var(--transition-fast);
}

.placeholderImage {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: var(--color-surface);
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
}

@media (min-width: 768px) {
  .name {
    font-size: 4.5rem;
  }

  .role {
    font-size: 1.75rem;
  }
}
```

- [ ] **Step 2: Update PortfolioHeader.module.css**

```css
.logo {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.navLink {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  position: relative;
}

.mobileNavLink {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  padding: 0.5rem 0;
  transition: color var(--transition-fast);
}
```

- [ ] **Step 3: Update PortfolioFooter.module.css**

```css
.text {
  font-size: 1rem;
  color: var(--color-text-secondary);
}
```

- [ ] **Step 4: Update PortfolioAbout.module.css**

```css
.paragraph {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
}
```

- [ ] **Step 5: Update PortfolioExperience.module.css**

```css
.role {
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.company {
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 400;
  color: var(--color-accent);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.75rem;
}

.description li {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;
}
```

- [ ] **Step 6: Update PortfolioEducation.module.css**

```css
.degree {
  font-size: 1.25rem;
  color: var(--color-text);
}

.institution {
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 400;
  color: var(--color-accent);
}

.year {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}
```

- [ ] **Step 7: Update PortfolioProjects.module.css**

```css
.imageWrapper {
  width: 100%;
  height: 180px;
  background-color: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.projectTitle {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.description {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.technology {
  font-size: 0.9rem;
  color: var(--color-accent);
  background-color: rgba(201, 168, 108, 0.1);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  transition: color var(--transition-fast);
}
```

- [ ] **Step 8: Update PortfolioSkills.module.css**

```css
.category {
  font-family: var(--font-display);
  font-size: 1.4rem;
  margin-bottom: 1.25rem;
  color: var(--color-text);
}

.item {
  font-size: 1rem;
  color: var(--color-text-secondary);
  background-color: rgba(201, 168, 108, 0.1);
  border: 1px solid rgba(201, 168, 108, 0.2);
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
}
```

- [ ] **Step 9: Update PortfolioContact.module.css**

```css
.subtitle {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 500px;
  margin: 0 auto 2.5rem;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  color: var(--color-text);
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: border-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
}

.email {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 2rem;
  display: inline-block;
  transition: color var(--transition-fast);
}
```

---

### Task 13: Verify no Spanish strings remain and build passes

**Files:**
- All modified files above.

- [ ] **Step 1: Search for remaining Spanish words**

Run: `cd frontend && rg -i "Hola|Soy|Ver proyectos|Descargar CV|Tu foto aquí|Inicio|Sobre mí|Proyectos|Experiencia|Contacto|Navegación principal|Abrir menú|Contacto|Si quieres|encantado|leerte|Todos los derechos reservados|Imagen del proyecto|Código|Skills y tecnologías|Experiencia laboral|Educación y certificaciones|Sobre mí|TuPortfolio" app/features/portfolio`
Expected: no matches in user-facing strings (ignore matches inside URLs or technology names if any).

- [ ] **Step 2: Run TypeScript and build checks**

Run: `cd frontend && npm run typecheck` (or `npx nuxt typecheck`)
Expected: no errors.

Run: `cd frontend && npm run build` (or `npx nuxt build`)
Expected: build completes successfully.

- [ ] **Step 3: Spot-check visual result**

Run: `cd frontend && npm run dev`
Open `http://localhost:3000` and verify:
- All text is in English.
- Font sizes are slightly larger than before.
- No layout breaks on mobile width (≈375px).
- Section navigation scrolls to correct anchors.

---

## Self-Review

### Spec coverage
- Content translation (`portfolio.ts`): Task 1.
- Embedded UI text translation: Tasks 2–10.
- Typography bump while keeping fonts: Tasks 11–12.
- Verification: Task 13.

### Placeholder scan
- No "TBD", "TODO", or vague steps.
- All code blocks contain the full intended content.
- Exact file paths are specified.

### Type consistency
- `PortfolioData` type remains unchanged.
- Section IDs are consistently updated across `PortfolioHeader.vue`, `PortfolioHero.vue`, and section components.
