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
