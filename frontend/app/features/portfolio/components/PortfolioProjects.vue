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
            <img
              v-if="project.imageUrl"
              :src="project.imageUrl"
              :alt="`Screenshot of ${project.title}`"
              :class="styles.projectImage"
              loading="lazy"
            />
            <span v-else>Project image</span>
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

              <a
                v-if="project.manualUrl"
                :href="project.manualUrl"
                target="_blank"
                rel="noopener noreferrer"
                :class="styles.link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Docs
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
