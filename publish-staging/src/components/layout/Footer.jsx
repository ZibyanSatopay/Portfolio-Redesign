import { CONTACT_INFO } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-layout">
        <p>© {new Date().getFullYear()} Muhammad Zibyan Feroz Satopay</p>
        <p>Mechatronics · IoT · Embedded systems</p>
        <div>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${CONTACT_INFO.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
