import {
  HiOutlineArrowLongRight,
  HiOutlineBeaker,
  HiOutlineCpuChip,
  HiOutlineTrophy,
} from 'react-icons/hi2'
import { MEDIDISPENSE } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function MediDispense() {
  return (
    <section id="projects" className="section work-section" aria-labelledby="work-heading">
      <div className="page-width">
        <SectionHeading
          id="work-heading"
          number="01"
          label="Selected systems"
          title="Engineering that leaves the screen."
          subtitle="A selection of connected products where software had to sense, decide, and produce a reliable physical result."
        />

        <Reveal className="feature-case">
          <div className="case-intro">
            <div className="case-kicker">
              <span>Featured system</span>
              <span>01 / 04</span>
            </div>

            <div className="case-badges">
              <span><HiOutlineBeaker aria-hidden="true" /> {MEDIDISPENSE.badges[0]}</span>
              <span><HiOutlineTrophy aria-hidden="true" /> {MEDIDISPENSE.badges[1]}</span>
            </div>

            <h3>{MEDIDISPENSE.title}</h3>
            <p className="case-subtitle">{MEDIDISPENSE.subtitle}</p>
            <p className="case-description">{MEDIDISPENSE.description}</p>

            <div className="case-note">
              <span>Design priority</span>
              <strong>Dependable dispensing—even when the network is not.</strong>
            </div>
          </div>

          <div className="case-system" aria-label="MEDIDISPENSE system architecture">
            <div className="system-window-bar">
              <span>System architecture</span>
              <span><i aria-hidden="true" /> Local control active</span>
            </div>

            <div className="architecture-map">
              <div className="architecture-core" aria-hidden="true">
                <span className="core-orbit" />
                <span className="core-orbit orbit-two" />
                <span className="core-chip"><HiOutlineCpuChip /></span>
                <strong>MEDI<br />CORE</strong>
                <small>Local-first</small>
              </div>

              <div className="architecture-nodes">
                {MEDIDISPENSE.architecture.map((item, index) => (
                  <div className="architecture-node" key={item.title}>
                    <span>{item.number}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.detail}</small>
                    </div>
                    {index < MEDIDISPENSE.architecture.length - 1 && (
                      <HiOutlineArrowLongRight aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="case-outcomes">
              {MEDIDISPENSE.outcomes.map(({ value, label }) => (
                <div key={value}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="case-footer">
            <div className="case-stack">
              <span>Build stack</span>
              <div>{MEDIDISPENSE.techStack.map((tech) => <b key={tech}>{tech}</b>)}</div>
            </div>
            <p>{MEDIDISPENSE.futureScope}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
