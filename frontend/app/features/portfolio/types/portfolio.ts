export interface Profile {
  name: string
  role: string
  location: string
  email: string
  linkedin: string
  github: string
  summary: string
  photo: string
  cv: string
}

export interface About {
  paragraphs: string[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
  imageUrl?: string
  manualUrl?: string
}

export interface Experience {
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
}

export interface Education {
  degree: string
  institution: string
  year: string
  description?: string
}

export interface PortfolioData {
  profile: Profile
  about: About
  skills: SkillCategory[]
  projects: Project[]
  experience: Experience[]
  education: Education[]
}
