import { HiOutlineCheck } from 'react-icons/hi2'
import { EXPERIENCE } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
      <div className="page-width experience-layout">
        <SectionHeading
          id="experience-heading"
          number="03"
          label="Experience"
          title="Built in production. Grounded in the field."
          subtitle="A progression from connected software products into mechatronics and industrial automation."
        />

        <div className="experience-list">
          {EXPERIENCE.map((item, index) => (
            <Reveal className={`experience-item${item.current ? ' is-current' : ''}`} delay={index * 0.08} key={item.company}>
              <div className="experience-number">0{index + 1}</div>
              <div className="experience-role">
                <div className="experience-meta">
                  <span>{item.period}</span>
                  {item.current && <span className="current-chip"><i aria-hidden="true" /> Current</span>}
                </div>
                <h3>{item.title}</h3>
                <p className="company-name">{item.company}</p>
              </div>
              <div className="experience-detail">
                <p>{item.summary}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}><HiOutlineCheck aria-hidden="true" />{highlight}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
