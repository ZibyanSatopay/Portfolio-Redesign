import { motion, useReducedMotion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function SectionHeading({ title, subtitle, label, number, id, align = 'left' }) {
  const { ref, inView } = useScrollReveal(0.12)
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduceMotion ? 0 : 0.52, ease: [0.22, 1, 0.36, 1] }}
      className={`section-heading section-heading-${align}`}
    >
      <div className="section-label">
        {number && <span>{number}</span>}
        {label}
      </div>
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  )
}
