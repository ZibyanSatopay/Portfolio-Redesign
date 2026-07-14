import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { HiOutlineArrowUp } from 'react-icons/hi2'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-top"
          type="button"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
          aria-label="Scroll back to top"
        >
          <HiOutlineArrowUp aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
