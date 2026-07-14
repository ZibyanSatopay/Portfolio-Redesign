import {
  FaAndroid,
  FaGitAlt,
  FaNodeJs,
  FaRaspberryPi,
  FaReact,
} from 'react-icons/fa'
import {
  SiArduino,
  SiEspressif,
  SiJquery,
  SiKotlin,
  SiSocketdotio,
  SiTailwindcss,
} from 'react-icons/si'
import {
  HiOutlineBolt,
  HiOutlineCircleStack,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineSignal,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2'

export const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Profile', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_ROLES = [
  'Embedded systems',
  'Automation logic',
  'Connected software',
]

export const HERO_METRICS = [
  { value: '01', label: 'Flagship system' },
  { value: '6+', label: 'Deployed systems' },
  { value: '2+', label: 'Years in industry' },
]

export const SYSTEM_ROUTE = [
  { label: 'Sense', value: 'Sensors · NFC · Cameras', icon: HiOutlineSignal },
  { label: 'Control', value: 'Pi · ESP32 · Android', icon: HiOutlineCpuChip },
  { label: 'Actuate', value: 'Motors · Gates · Kiosks', icon: HiOutlineBolt },
  { label: 'Observe', value: 'APIs · Dashboards · SQL', icon: HiOutlineCircleStack },
]

export const CAPABILITIES = [
  {
    number: '01',
    title: 'Embedded & Control',
    description: 'Device logic that reads the physical world and controls reliable motion.',
    icon: HiOutlineCpuChip,
    skills: [
      { name: 'Raspberry Pi', icon: FaRaspberryPi },
      { name: 'Arduino', icon: SiArduino },
      { name: 'ESP32', icon: SiEspressif },
      { name: 'GPIO Control', icon: HiOutlineWrenchScrewdriver },
      { name: 'Sensor Integration', icon: HiOutlineSignal },
      { name: 'Automation Logic', icon: HiOutlineBolt },
    ],
  },
  {
    number: '02',
    title: 'Connected Software',
    description: 'Backend services and real-time data flows that keep field systems visible.',
    icon: HiOutlineCodeBracket,
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'REST APIs', icon: HiOutlineCodeBracket },
      { name: 'WebSockets', icon: SiSocketdotio },
      { name: 'SQL / SQLite', icon: HiOutlineCircleStack },
      { name: 'Embedded Linux', icon: HiOutlineCpuChip },
      { name: 'System Testing', icon: HiOutlineWrenchScrewdriver },
    ],
  },
  {
    number: '03',
    title: 'Interfaces & Tools',
    description: 'Clear operator interfaces for kiosks, dashboards, and embedded Android.',
    icon: FaAndroid,
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Android', icon: FaAndroid },
      { name: 'Java / Kotlin', icon: SiKotlin },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'jQuery', icon: SiJquery },
      { name: 'Git', icon: FaGitAlt },
    ],
  },
]

export const EXPERIENCE = [
  {
    title: 'Jr. Mechatronics Developer',
    company: 'Indra Water',
    period: 'Jun 2026 — Present',
    current: true,
    summary: 'Building practical automation and hardware–software systems for water-focused industrial applications.',
    highlights: [
      'Integrating mechanical assemblies, electronics, control logic, and software interfaces',
      'Supporting field-oriented testing with a focus on dependable system behaviour',
      'Developing hands-on commissioning and industrial automation experience',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Orbits India',
    period: '2023 — 2026',
    current: false,
    summary: 'Delivered connected products spanning enterprise software, access control, payments, and industrial Android devices.',
    highlights: [
      'Built enterprise CRM systems with real-time operational dashboards',
      'Developed ANPR parking, NFC payment, and turnstile access-control systems',
      'Programmed embedded Android boards and WebSocket-based monitoring tools',
    ],
  },
]

export const MEDIDISPENSE = {
  title: 'MEDIDISPENSE',
  subtitle: 'Automated medicine dispensing system',
  description:
    'A resilient, patient-focused dispenser that combines embedded control, repeatable motor actuation, local scheduling, and a clear inventory dashboard.',
  badges: ['Prototype', '1st prize · National hackathon'],
  architecture: [
    { number: '01', title: 'Schedule', detail: 'Patient routines and dose timing' },
    { number: '02', title: 'Control', detail: 'Raspberry Pi + local SQLite' },
    { number: '03', title: 'Dispense', detail: '28BYJ-48 motors + ULN2003' },
    { number: '04', title: 'Observe', detail: 'React dashboard + REST API' },
  ],
  outcomes: [
    { value: 'Multi-patient', label: 'Individual schedules and profiles' },
    { value: 'Offline-ready', label: 'Local operation without connectivity' },
    { value: 'Inventory-aware', label: 'Quantity tracking and refill visibility' },
  ],
  techStack: [
    'Raspberry Pi',
    'Python',
    'Stepper motors',
    'GPIO',
    'React',
    'SQLite',
    'REST API',
  ],
  futureScope: 'Next exploration: computer-vision-assisted pill verification and anomaly detection.',
}

export const OTHER_PROJECTS = [
  {
    number: '02',
    attribution: 'Built at Orbits India',
    title: 'ANPR Parking',
    subtitle: 'Camera-led parking automation',
    description:
      'A connected parking workflow for plate recognition, slot management, automated access, and fee calculation.',
    tags: ['ANPR', 'Node.js', 'React', 'Camera integration', 'SQL'],
    signal: 'Vision → access → billing',
  },
  {
    number: '03',
    attribution: 'Built at Orbits India',
    title: 'NFC Payment Kiosk',
    subtitle: 'Contactless self-service system',
    description:
      'An embedded payment kiosk that brings together NFC interactions, transaction records, and operator monitoring.',
    tags: ['NFC', 'Android', 'Node.js', 'Payments', 'Kiosk'],
    signal: 'Tap → validate → record',
  },
  {
    number: '04',
    attribution: 'Built at Orbits India',
    title: 'Turnstile Access',
    subtitle: 'Real-time gate control platform',
    description:
      'An Android-based controller for turnstile hardware with live access logs, visitor workflows, and admin visibility.',
    tags: ['Android', 'Java', 'WebSocket', 'Embedded', 'Access control'],
    signal: 'Identify → authorize → actuate',
  },
]

export const PROFILE_POINTS = [
  'I work comfortably across electronics, embedded boards, backend services, and the interfaces people use to operate them.',
  'My strongest work happens when software must create a dependable physical outcome—not just render a screen.',
]

export const EDUCATION = [
  { degree: 'Bachelor of Computer Science', status: 'Final year · 2026', icon: 'BSc' },
  { degree: 'Diploma in Computer Science', status: 'Completed · 2023', icon: 'DCS' },
]

export const CONTACT_INFO = {
  email: 'zibyanwork@gmail.com',
  phone: '+91 9821831808',
  linkedin: 'https://www.linkedin.com/in/zibyan1903',
  github: 'https://github.com/zibyan',
}
