import portfolioV1 from '../assets/images/projects/portfolio-v1.png'
import tvDisplay from '../assets/images/projects/tv-display.png'
import riskRegister from '../assets/images/projects/risk-register.png'
import ticketingApp from '../assets/images/projects/ticketing-app.png'
import onlineRegistration from '../assets/images/projects/online-registration.png'

const projects = [
  {
    id: 'p1',
    title: 'Portfolio Website v1',
    description: 'Interactive portfolio website built with Vue.js and Typescript',
    tags: ['Vue.js', 'JavaScript', 'HTML', 'CSS'],
    colorA: '#ff6b6b',
    colorB: '#4ecdc4',
    image: portfolioV1,
    link: 'https://github.com/degicandra/degi-portfolio'
  },
  {
    id: 'p2',
    title: 'TV Display in Hospital Lobby',
    description: 'For patient information, news updates, doctor schedules, promo, and mores.',
    tags: ['PHP', 'MySQL', 'CSS', 'Bootstrap', 'JavaScript'],
    colorA: '#7F00FF',
    colorB: '#00DBDE',
    image: tvDisplay,
    link: 'https://github.com/degicandra/landing-page-hospital-lobby'
  },
  {
    id: 'p3',
    title: 'Risk Register Application',
    description: 'An application for managing and tracking risks in a business environment.',
    tags: ['Supabase', 'Vue.js', 'JavaScript'],
    colorA: '#7F00FF',
    colorB: '#E100FF',
    image: riskRegister,
    link: '#'
  },
  {
    id: 'p4',
    title: 'Ticketing Application',
    description: 'An application for managing and tracking tickets in a business environment.',
    tags: ['Vue.js', 'Supabase', 'Tailwind CSS'],
    colorA: '#00DBDE',
    colorB: '#FC00FF',
    image: ticketingApp,
    link: 'https://github.com/degicandra/ticketing-app'
  },
  {
    id: 'p5',
    title: 'Patient Online Registration',
    description: 'An application for patients to register online for hospital appointments.',
    tags: ['Javascript', 'MySQL', 'Bootstrap', 'PHP'],
    colorA: '#ffd6a5',
    colorB: '#fdffb6',
    image: onlineRegistration,
    link: 'https://github.com/degicandra/pendaftaran_online'
  },
  {
    id: 'p6',
    title: 'Soon',
    description: 'Update Soon',
    tags: [' '],
    colorA: '#00c6ff',
    colorB: '#0072ff',
    image: 'https://www.shutterstock.com/id/search/coming-soon-wallpaper',
    link: '#'
  }
]

export default projects
