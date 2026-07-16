<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'
import styles from '../styles/PortfolioFooter.module.css'

const { profile } = usePortfolio()
</script>

<template>
  <footer :class="styles.footer">
    <div :class="styles.container">
      <p :class="styles.text">
        © {{ new Date().getFullYear() }} <span :class="styles.name">{{ profile.name }}</span>.
      </p>
    </div>
  </footer>
</template>
