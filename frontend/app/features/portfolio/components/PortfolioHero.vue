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
          <p :class="styles.greeting">Hey!, I'm</p>
          <h1 :class="styles.name">{{ profile.name }}</h1>
          <p :class="styles.role">{{ profile.role }}</p>
          <p :class="styles.summary">{{ profile.summary }}</p>

          <div :class="styles.actions">
            <a href="#projects" :class="styles.primaryButton">
              View projects
            </a>
            <a :href="profile.cv" download :class="styles.secondaryButton">
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
          <img
            :src="profile.photo"
            :alt="`Photo of ${profile.name}`"
            :class="styles.profileImage"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
</template>
