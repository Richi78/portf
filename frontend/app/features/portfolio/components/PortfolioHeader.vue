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
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
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
