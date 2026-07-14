import { useInView } from 'react-intersection-observer'

/**
 * Hook for scroll-triggered reveal animations.
 * Returns { ref, controls } where controls has `opacity` and `y` values
 * compatible with framer-motion's `animate` prop.
 */
export function useScrollReveal(threshold = 0.15) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  return { ref, inView }
}
