import { useEffect, useRef, type RefObject } from 'react'

const ANIM_CLASSES = ['.fade-in', '.slide-in-left', '.slide-in-right', '.scale-in', '.stagger-children']

export function useInView<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const el = ref.current
    if (el) {
      const selector = ANIM_CLASSES.join(',')
      const children = el.querySelectorAll(selector)
      children.forEach((child) => observer.observe(child))
      ANIM_CLASSES.forEach((cls) => {
        if (el.classList.contains(cls.slice(1))) observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
