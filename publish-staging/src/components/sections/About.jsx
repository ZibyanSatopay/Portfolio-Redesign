import { HiOutlineArrowDownRight } from 'react-icons/hi2'
import { PROFILE_POINTS } from '../../data/portfolio'
import Reveal from '../ui/Reveal'

export default function About() {
  return (
    <section id="about" className="section profile-section" aria-labelledby="profile-heading">
      <div className="page-width profile-layout">
        <Reveal className="profile-label">
          <span>04</span>
          <p>Profile</p>
          <HiOutlineArrowDownRight aria-hidden="true" />
        </Reveal>

        <Reveal className="profile-statement" delay={0.04}>
          <p className="profile-kicker">The point of view</p>
          <h2 id="profile-heading">
            The best systems feel simple at the surface because the complexity has been handled underneath.
          </h2>

          <div className="profile-copy">
            {PROFILE_POINTS.map((point) => <p key={point}>{point}</p>)}
          </div>
        </Reveal>

        <Reveal className="profile-facts" delay={0.08}>
          <div>
            <span>Current</span>
            <strong>Indra Water</strong>
            <small>Jr. Mechatronics Developer</small>
          </div>
          <div>
            <span>Core focus</span>
            <strong>Physical computing</strong>
            <small>Automation · IoT · Embedded</small>
          </div>
          <div>
            <span>Recognition</span>
            <strong>National winner</strong>
            <small>MEDIDISPENSE · National hackathon</small>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
