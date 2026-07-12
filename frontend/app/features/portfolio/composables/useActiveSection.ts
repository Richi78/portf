import { onMounted, onUnmounted, shallowRef } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeSection = shallowRef<string>(sectionIds[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) {
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
      }
    )

    elements.forEach((element) => observer?.observe(element))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeSection }
}
