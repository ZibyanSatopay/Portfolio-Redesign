import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {
  HiOutlineArrowUpRight,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from 'react-icons/hi2'
import { CONTACT_INFO } from '../../data/portfolio'
import Reveal from '../ui/Reveal'

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-grid" aria-hidden="true" />
      <div className="page-width contact-layout">
        <Reveal className="contact-main">
          <span className="contact-label"><i aria-hidden="true" /> Start a conversation</span>
          <h2 id="contact-heading">Have a system that needs to <em>sense, decide,</em> or move?</h2>
          <p>
            I’m always interested in thoughtful conversations around mechatronics,
            embedded systems, automation, and connected products.
          </p>

          <a
            className="contact-email"
            href={`mailto:${CONTACT_INFO.email}?subject=Project%20conversation`}
          >
            <span><HiOutlineEnvelope aria-hidden="true" />{CONTACT_INFO.email}</span>
            <HiOutlineArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal className="contact-aside" delay={0.08}>
          <p>Direct lines</p>
          <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
            <span><HiOutlinePhone aria-hidden="true" />Phone</span>
            <strong>{CONTACT_INFO.phone}</strong>
          </a>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer">
            <span><FaLinkedinIn aria-hidden="true" />LinkedIn</span>
            <strong>View profile <HiOutlineArrowUpRight aria-hidden="true" /></strong>
          </a>
          <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer">
            <span><FaGithub aria-hidden="true" />GitHub</span>
            <strong>View work <HiOutlineArrowUpRight aria-hidden="true" /></strong>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
