import { motion, useReducedMotion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const { ref, inView } = useScrollReveal(0.1)
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}
