import { onMounted, onUnmounted } from 'vue'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  revealClass?: string
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    revealClass = 'reveal'
  } = options

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const elements = document.querySelectorAll(`.${revealClass}`)
    if (elements.length === 0) {
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${revealClass}--visible`)
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    elements.forEach((element) => observer?.observe(element))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
