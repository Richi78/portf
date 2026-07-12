import { readonly } from 'vue'
import { portfolioData } from '../content/portfolio'

export function usePortfolio() {
  return {
    profile: readonly(portfolioData.profile),
    about: readonly(portfolioData.about),
    skills: readonly(portfolioData.skills),
    projects: readonly(portfolioData.projects),
    experience: readonly(portfolioData.experience),
    education: readonly(portfolioData.education)
  }
}
