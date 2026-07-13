import { CAPABILITIES } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Skills() {
  return (
    <section id="capabilities" className="section capabilities-section" aria-labelledby="capabilities-heading">
      <div className="page-width">
        <SectionHeading
          id="capabilities-heading"
          number="02"
          label="Capabilities"
          title="One system, from signal to interface."
          subtitle="I move across the stack when the product needs it—connecting hardware, control logic, data services, and clear operator experiences."
        />

        <div className="capability-grid">
          {CAPABILITIES.map((capability, index) => {
            const CategoryIcon = capability.icon
            return (
              <Reveal className="capability-card" delay={index * 0.06} key={capability.title}>
                <div className="capability-head">
                  <span>{capability.number}</span>
                  <CategoryIcon aria-hidden="true" />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>

                <ul>
                  {capability.skills.map(({ name, icon: Icon }) => (
                    <li key={name}>
                      <Icon aria-hidden="true" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="working-principles">
          <span>How I work</span>
          <p>Prototype quickly.</p><i aria-hidden="true" />
          <p>Test the physical path.</p><i aria-hidden="true" />
          <p>Design for the field.</p>
        </Reveal>
      </div>
    </section>
  )
}
