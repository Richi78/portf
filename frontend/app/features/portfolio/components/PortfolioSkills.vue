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
