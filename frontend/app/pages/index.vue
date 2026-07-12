<script setup lang="ts">
import PortfolioHeader from '../features/portfolio/components/PortfolioHeader.vue'
import PortfolioHero from '../features/portfolio/components/PortfolioHero.vue'
import PortfolioAbout from '../features/portfolio/components/PortfolioAbout.vue'
import PortfolioSkills from '../features/portfolio/components/PortfolioSkills.vue'
import PortfolioProjects from '../features/portfolio/components/PortfolioProjects.vue'
import PortfolioExperience from '../features/portfolio/components/PortfolioExperience.vue'
import PortfolioEducation from '../features/portfolio/components/PortfolioEducation.vue'
import PortfolioContact from '../features/portfolio/components/PortfolioContact.vue'
import PortfolioFooter from '../features/portfolio/components/PortfolioFooter.vue'
import { useScrollReveal } from '../features/portfolio/composables/useScrollReveal'

useScrollReveal()

useHead({
  title: 'Portfolio | Junior Full Stack Developer',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Personal portfolio of a junior full stack developer passionate about modern web development.'
    }
  ]
})
</script>

<template>
  <div>
    <PortfolioHeader />

    <main>
      <PortfolioHero />
      <PortfolioAbout />
      <PortfolioSkills />
      <PortfolioProjects />
      <PortfolioExperience />
      <PortfolioEducation />
      <PortfolioContact />
    </main>

    <PortfolioFooter />
  </div>
</template>
