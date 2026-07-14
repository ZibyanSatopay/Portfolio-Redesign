import { HiOutlineAcademicCap } from 'react-icons/hi2'
import { EDUCATION } from '../../data/portfolio'
import Reveal from '../ui/Reveal'

export default function Education() {
  return (
    <section className="education-section" aria-labelledby="education-heading">
      <div className="page-width education-layout">
        <Reveal className="education-heading">
          <span><HiOutlineAcademicCap aria-hidden="true" /></span>
          <div>
            <p>Education</p>
            <h2 id="education-heading">Computer science foundation,<br />built into physical systems.</h2>
          </div>
        </Reveal>

        <div className="education-list">
          {EDUCATION.map((item, index) => (
            <Reveal className="education-item" delay={index * 0.06} key={item.degree}>
              <span>{item.icon}</span>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.status}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
