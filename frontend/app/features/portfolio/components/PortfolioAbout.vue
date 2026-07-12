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
