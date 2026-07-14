import { motion, useReducedMotion } from 'framer-motion'
import {
  HiOutlineArrowDown,
  HiOutlineArrowRight,
  HiOutlineDocumentArrowDown,
} from 'react-icons/hi2'
import { HERO_METRICS, HERO_ROLES, SYSTEM_ROUTE } from '../../data/portfolio'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.72, ease: [0.22, 1, 0.36, 1] }

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <motion.div
        className="hero-layout page-width"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.095, delayChildren: 0.12 } },
        }}
      >
        <div className="hero-copy">
          <motion.div className="availability" variants={reveal} transition={transition}>
            <span className="live-dot" aria-hidden="true" />
            Jr. Mechatronics Developer · Indra Water
          </motion.div>

          <motion.p className="hero-name" variants={reveal} transition={transition}>
            Muhammad Zibyan Feroz Satopay
          </motion.p>

          <motion.h1 id="hero-title" variants={reveal} transition={transition}>
            I build software that
            <span>moves real systems.</span>
          </motion.h1>

          <motion.p className="hero-intro" variants={reveal} transition={transition}>
            Mechatronics and IoT engineering across embedded control, automation,
            connected services, and operator-facing interfaces.
          </motion.p>

          <motion.div className="hero-roles" variants={reveal} transition={transition}>
            {HERO_ROLES.map((role, index) => (
              <span key={role}><b>0{index + 1}</b>{role}</span>
            ))}
          </motion.div>

          <motion.div className="hero-actions" variants={reveal} transition={transition}>
            <a className="button button-primary" href="#projects">
              Explore selected systems <HiOutlineArrowRight aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="/resume.pdf" download>
              <HiOutlineDocumentArrowDown aria-hidden="true" /> Download résumé
            </a>
          </motion.div>
        </div>

        <motion.div
          className="system-visual"
          variants={reveal}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.18 }}
          aria-label="System workflow from sensing to observation"
        >
          <div className="visual-topline">
            <div>
              <span>Live system map</span>
              <strong>Hardware ↔ Software</strong>
            </div>
            <span className="visual-status"><i aria-hidden="true" /> Operational</span>
          </div>

          <div className="route-map">
            <div className="route-spine" aria-hidden="true"><span /></div>
            {SYSTEM_ROUTE.map(({ label, value, icon: Icon }, index) => (
              <motion.div
                className="route-node"
                key={label}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.72 + index * 0.12 }}
              >
                <span className="route-index">0{index + 1}</span>
                <span className="route-icon"><Icon aria-hidden="true" /></span>
                <span className="route-copy">
                  <small>{label}</small>
                  <strong>{value}</strong>
                </span>
                <span className="route-pulse" aria-hidden="true" />
              </motion.div>
            ))}
          </div>

          <div className="visual-footer">
            <span>Input</span><i aria-hidden="true" /><span>Logic</span><i aria-hidden="true" /><span>Physical output</span>
          </div>
        </motion.div>

        <motion.div className="hero-metrics" variants={reveal} transition={transition}>
          {HERO_METRICS.map(({ value, label }) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <a className="scroll-cue" href="#projects">
        <span>Selected work</span><HiOutlineArrowDown aria-hidden="true" />
      </a>
    </section>
  )
}
