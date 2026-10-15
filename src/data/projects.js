export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'react', label: 'React' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'html-css', label: 'HTML/CSS' },
]

export const projects = [
  {
    slug: 'resume-builder',
    title: 'Resume Builder',
    category: 'javascript',
    featured: true,
    accent: '#38bdf8',
    icon: 'FileText',
    summary:
      'A resume builder that lets users structure professional details into a shareable, print-ready layout.',
    overview:
      'This project focuses on collecting resume content and presenting it in a clean, structured document format. It was built as part of a milestone series and is deployed as a live web app.',
    features: [
      'Structured resume sections for personal and professional details',
      'Clean document-style layout for previewing content',
      'Live deployment for sharing and iteration',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://milestone-5byamna.vercel.app',
    githubUrl: 'https://github.com/Amnaali1234/milestone-5byamna',
  },
  {
    slug: 'background-color-changer',
    title: 'Background Color Changer',
    category: 'javascript',
    accent: '#7dd3fc',
    icon: 'Palette',
    summary: 'A small interactive UI that updates the page background color on demand.',
    overview:
      'This project practices DOM updates and event handling by changing the background color through user interaction. It is a focused exercise in keeping UI state and visual feedback in sync.',
    features: [
      'Immediate visual feedback when a color action is triggered',
      'Simple, readable JavaScript event logic',
      'Lightweight interface that works well on small screens',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://backgroundcolor-changer-gshb.vercel.app',
    githubUrl: 'https://github.com/Amnaali1234/Backgroundcolor-changer',
  },
  {
    slug: 'react-counter-app',
    title: 'React Counter App',
    category: 'react',
    accent: '#22d3ee',
    icon: 'Plus',
    summary: 'A React counter that demonstrates component state and user-driven UI updates.',
    overview:
      'A compact React application for incrementing, decrementing, and resetting a value. It is a practical introduction to hooks, component rendering, and keeping interface actions predictable.',
    features: [
      'State-driven count updates',
      'Clear action buttons for increase, decrease, and reset',
      'Built with React and deployed as a live demo',
    ],
    technologies: ['React', 'JavaScript', 'Vite'],
    liveUrl: 'https://counter-app-react-henna.vercel.app',
    githubUrl: 'https://github.com/Amnaali1234/counter-app-react',
  },
  {
    slug: 'weather-app',
    title: 'Weather App',
    category: 'javascript',
    accent: '#60a5fa',
    icon: 'CloudSun',
    summary: 'A real-time weather application to check current forecasts and meteorological details.',
    overview:
      'This application allows users to search for cities and fetch real-time weather information and forecasts using modern JavaScript API integrations.',
    features: [
      'Real-time weather data fetching',
      'Clean interface with intuitive UI state handling',
      'Responsive design for all mobile and desktop devices',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://weather-app-eta-ebon-58.vercel.app/',
    githubUrl: 'https://github.com/Amnaali1234/Weather_app.git',
  },
  {
    slug: 'attendance-app',
    title: 'Attendance App',
    category: 'javascript',
    accent: '#67e8f9',
    icon: 'UserCheck',
    summary: 'An application designed to manage and track attendance efficiently.',
    overview:
      'A streamlined dashboard app to record, update, and manage attendance status in real-time with an easy-to-use user interface.',
    features: [
      'Mark present, absent, and late entries',
      'Dynamic list generation and record management',
      'Mobile-friendly responsive layout',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://amnaali1234.github.io/Attendance_app/',
    githubUrl: 'https://github.com/Amnaali1234/Attendance_app.git',
  },
  {
    slug: 'voting-app',
    title: 'Voting App',
    category: 'javascript',
    accent: '#34d399',
    icon: 'Vote',
    summary: 'An interactive voting application to cast and tally votes in real time.',
    overview:
      'A polling web app built to securely register user selections and instantly present updated voting results with a clean interface.',
    features: [
      'Interactive voting options',
      'Instant result updates',
      'Responsive and user-friendly layout',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://voting-app-rho-nine.vercel.app/',
    githubUrl: 'https://github.com/Amnaali1234/Voting_app.git',
  },
  {
    slug: 'github-profile-finder',
    title: 'GitHub Profile Finder',
    category: 'javascript',
    accent: '#38bdf8',
    icon: 'Search',
    summary: 'A tool to search GitHub usernames and instantly display profile details and statistics.',
    overview:
      'Leverages the GitHub API to query user accounts, showing repositories, followers, and profile links cleanly in the browser.',
    features: [
      'Live GitHub user search functionality',
      'Detailed profile card presentation',
      'Direct links to repositories and user profiles',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://amnaali1234.github.io/Github_profile_finder/',
    githubUrl: 'https://github.com/Amnaali1234/Github_profile_finder.git',
  },
  {
    slug: 'mood-app',
    title: 'Mood App',
    category: 'javascript',
    accent: '#f43f5e',
    icon: 'Smile',
    summary: 'An expressive mood tracker app to record and reflect on daily emotions.',
    overview:
      'A fun frontend app that lets users track their daily moods, adding a personal touch to everyday status logs.',
    features: [
      'Mood selection and tracking interface',
      'Clean visual indicators for different emotions',
      'Lightweight and responsive layout',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://amnaali1234.github.io/Mood_app/',
    githubUrl: 'https://github.com/Amnaali1234/Mood_app.git',
  },
  {
    slug: 'simple-calculator',
    title: 'Simple Calculator',
    category: 'javascript',
    accent: '#38bdf8',
    icon: 'Calculator',
    summary: 'A browser calculator for basic arithmetic with a compact keypad layout.',
    overview:
      'This project practices JavaScript expression handling and UI composition. Buttons map to digits and operators, and the display updates as calculations are entered.',
    features: [
      'Digit and operator keypad',
      'Live display of the current calculation',
      'Straightforward layout for quick use',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://amnaali1234.github.io/simple_calculator/',
    githubUrl: 'https://github.com/Amnaali1234/simple_calculator',
  },
  {
    slug: 'digital-clock',
    title: 'Digital Clock',
    category: 'javascript',
    accent: '#0ea5e9',
    icon: 'Clock',
    summary: 'A live digital clock that updates the current time in the browser.',
    overview:
      'The clock uses JavaScript timing functions to keep hours, minutes, and seconds current. It is a clean exercise in formatting time and updating the DOM on an interval.',
    features: [
      'Continuously updating time display',
      'Readable digital layout',
      'Lightweight page with no extra UI noise',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://amnaali1234.github.io/Digital_clock/',
    githubUrl: 'https://github.com/Amnaali1234/Digital_clock',
  },
  {
    slug: 'guessing-game',
    title: 'Guessing Game',
    category: 'javascript',
    accent: '#7dd3fc',
    icon: 'Dices',
    summary: 'A number guessing game that gives feedback until the correct value is found.',
    overview:
      'Players submit guesses and receive guidance until they match the target number. The project focuses on conditionals, user input, and keeping game feedback easy to understand.',
    features: [
      'Guess input with immediate feedback',
      'Simple win and retry flow',
      'JavaScript logic separated from presentation',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://amnaali1234.github.io/Guess_game/',
    githubUrl: 'https://github.com/Amnaali1234/Guess_game',
  },
  {
    slug: 'parallax-website',
    title: 'Parallax Website',
    category: 'html-css',
    accent: '#94a3b8',
    icon: 'Layers',
    summary: 'A scrolling landing experience that uses layered parallax motion for depth.',
    overview:
      'This HTML and CSS project explores visual depth through layered backgrounds and scroll-based composition. It is designed as a visual page rather than an application workflow.',
    features: [
      'Layered scrolling sections',
      'HTML/CSS visual composition',
      'Responsive page structure',
    ],
    technologies: ['HTML', 'CSS'],
    liveUrl: 'https://amnaali1234.github.io/HTML-CSS-Parallax-_website/',
    githubUrl: 'https://github.com/Amnaali1234/HTML-CSS-Parallax-_website',
  },
  {
    slug: 'nexcent-landing-page',
    title: 'Nexcent Landing Page',
    category: 'html-css',
    accent: '#34d399',
    icon: 'LayoutTemplate',
    summary: 'A multi-section marketing landing page built from the Nexcent design brief.',
    overview:
      'Created as a hackathon-style landing page, this project translates a product website layout into semantic HTML and CSS. It emphasizes spacing, section rhythm, and responsive arrangement of marketing content.',
    features: [
      'Hero, features, and supporting content sections',
      'Responsive layout for desktop and smaller screens',
      'Design-to-code practice from a provided landing brief',
    ],
    technologies: ['HTML', 'CSS'],
    liveUrl: 'https://amnaali1234.github.io/Hackathon-Nexcent-website/',
    githubUrl: 'https://github.com/Amnaali1234/Hackathon-Nexcent-website',
  },
  {
    slug: 'fuel-checker',
    title: 'Fuel Checker',
    category: 'javascript',
    accent: '#fbbf24',
    icon: 'Fuel',
    summary: 'A utility UI for checking and presenting fuel-related values in a simple flow.',
    overview:
      'Fuel Checker is a practical JavaScript interface for entering values and viewing a clear result. It focuses on form input, calculation, and presenting output without extra complexity.',
    features: [
      'Input-driven calculation flow',
      'Clear result presentation',
      'Compact utility-style interface',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://amnaali1234.github.io/Fuel_checker/',
    githubUrl: 'https://github.com/Amnaali1234/Fuel_checker',
  },
  {
    slug: 'noor-collections',
    title: 'Noor Collections',
    category: 'html-css',
    accent: '#c4b5fd',
    icon: 'Store',
    summary: 'A collections-focused website layout for presenting products in a refined storefront style.',
    overview:
      'Noor Collections is a frontend storefront layout for browsing collection-style content. The emphasis is on visual hierarchy, product-oriented sections, and a cohesive brand presentation.',
    features: [
      'Collection-oriented page sections',
      'Product-style visual grouping',
      'Responsive marketing layout',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://amnaali1234.github.io/Noor_collections_website/',
    githubUrl: 'https://github.com/Amnaali1234/Noor_collections_website',
  },
  {
    slug: 'value-again',
    title: 'Value Again',
    category: 'html-css',
    accent: '#2dd4bf',
    icon: 'Recycle',
    summary: 'A branded website layout for Value Again, focused on clear messaging and sectioned content.',
    overview:
      'Value Again is a multi-section website that presents brand content in a structured, readable layout. It is a frontend composition project covering navigation, content blocks, and visual consistency.',
    features: [
      'Multi-section brand layout',
      'Clear content hierarchy',
      'Responsive HTML/CSS structure',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://amnaali1234.github.io/Value_Again_Website/',
    githubUrl: 'https://github.com/Amnaali1234/Value_Again_Website',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

export function isPlaceholderUrl(url) {
  return !url || url.startsWith('ADD_')
}