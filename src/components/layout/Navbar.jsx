import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { HiOutlineArrowUpRight, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import { NAV_LINKS } from '../../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 170, damping: 30, mass: 0.2 })
  const progressValue = reduceMotion ? scrollYProgress : progress

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['home', ...NAV_LINKS.map(({ href }) => href.slice(1))]
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -68% 0px', threshold: [0, 0.2, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mobileOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)')
    const closeOnDesktop = (event) => {
      if (event.matches) setMobileOpen(false)
    }

    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <motion.header
      className={`site-header${scrolled ? ' is-scrolled' : ''}`}
      initial={reduceMotion ? false : { y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="scroll-progress" style={{ scaleX: progressValue }} />
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Zibyan Satopay, home">
          <span className="brand-mark" aria-hidden="true">ZS</span>
          <span className="brand-name">
            Zibyan Satopay
            <small>Mechatronics · IoT</small>
          </span>
        </a>

        <div className="nav-links">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1)
            const active = activeSection === id
            return (
              <a key={href} href={href} aria-current={active ? 'location' : undefined}>
                {label}
              </a>
            )
          })}
        </div>

        <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">
          Résumé <HiOutlineArrowUpRight aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        >
          {mobileOpen ? <HiOutlineXMark aria-hidden="true" /> : <HiOutlineBars3 aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            <div className="mobile-links">
              {NAV_LINKS.map(({ label, href }, index) => (
                <a key={href} href={href} onClick={() => setMobileOpen(false)}>
                  <span>0{index + 1}</span>{label}
                </a>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
                <span>06</span>Open résumé <HiOutlineArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
