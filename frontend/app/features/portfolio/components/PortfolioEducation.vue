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
