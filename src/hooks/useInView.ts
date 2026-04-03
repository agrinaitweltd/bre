import { useEffect, useRef, type RefObject } from 'react'

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
      const children = el.querySelectorAll('.fade-in')
      children.forEach((child) => observer.observe(child))
      if (el.classList.contains('fade-in')) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
