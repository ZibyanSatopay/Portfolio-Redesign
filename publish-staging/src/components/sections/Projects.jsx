import {
  HiOutlineCreditCard,
  HiOutlineLockClosed,
  HiOutlineVideoCamera,
} from 'react-icons/hi2'
import { OTHER_PROJECTS } from '../../data/portfolio'
import Reveal from '../ui/Reveal'

const projectIcons = [HiOutlineVideoCamera, HiOutlineCreditCard, HiOutlineLockClosed]

export default function Projects() {
  return (
    <section className="other-work" aria-label="Additional selected systems">
      <div className="page-width">
        <div className="other-work-heading">
          <span>More selected work</span>
          <p>Three connected products built at Orbits India around real operational workflows.</p>
        </div>

        <div className="project-grid">
          {OTHER_PROJECTS.map((project, index) => {
            const Icon = projectIcons[index]
            return (
              <Reveal className="project-card" delay={index * 0.06} key={project.title}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.attribution}</span>
                </div>

                <div className="project-glyph" aria-hidden="true">
                  <span /><span /><span />
                  <Icon />
                </div>

                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-signal">
                  <i aria-hidden="true" />{project.signal}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
