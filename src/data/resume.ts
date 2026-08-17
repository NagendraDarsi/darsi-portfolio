export interface Profile {
  name: string
  title: string
  email: string
  phone: string
  location: string
  summary: string
}

export const profile: Profile = {
  name: 'Darsi Nagendra',
  title: 'Software Developer',
  email: 'darsinagendra302@gmail.com',
  phone: '+91 9182467925',
  location: 'Bengaluru, India',
  summary:
    'Software Developer with 3 years of professional experience across backend and full-stack development, ' +
    'building secure, scalable and reliable production applications using Node.js, TypeScript, NestJS, MongoDB ' +
    'and RESTful APIs. Experienced in authentication and authorization, JWT/OAuth, real-time WebSocket services, ' +
    'background schedulers, database optimization, AWS integrations, third-party APIs, testing and production ' +
    'debugging. Strong experience with Agile development, CI/CD, API design, performance optimization and clean ' +
    'architecture. Experienced in AI-assisted development using ChatGPT, Claude Code and GitHub Copilot.',
}

export const heroStack = [
  'Node.js',
  'TypeScript',
  'NestJS',
  'MongoDB',
  'Vue.js',
  'MySQL',
  'WebSockets',
]

export interface StatItem {
  value: string
  label: string
}

export const stats: StatItem[] = [
  { value: '3+', label: 'Years of experience' },
  { value: '3', label: 'Companies & teams' },
  { value: '10+', label: 'Production modules shipped' },
  { value: '6', label: 'Languages supported (i18n)' },
]

export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: ['Node.js', 'TypeScript', 'NestJS', 'Express.js', 'JavaScript', 'PHP', 'Laravel', 'RESTful APIs', 'WebSockets', 'Socket.io'],
  },
  {
    title: 'Frontend',
    skills: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'AJAX', 'Responsive Web Apps'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Redis', 'Database Indexing', 'Query Optimization', 'TTL Strategies'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS S3', 'AWS CloudFront', 'AWS EC2', 'CI/CD', 'Git', 'Bitbucket', 'Production Deployment', 'Monitoring'],
  },
  {
    title: 'Security',
    skills: ['JWT', 'OAuth', 'OTP', 'Refresh Token Rotation', 'RBAC', 'Authentication & Authorization'],
  },
  {
    title: 'Testing & API',
    skills: ['Jest', 'Swagger/OpenAPI', 'API Validation', 'Logging', 'Code Reviews', 'Integration Testing'],
  },
  {
    title: 'Architecture & Practices',
    skills: ['Clean Architecture', 'MVC', 'Agile', 'Performance Optimization', 'API Design', 'Debugging', 'System Design'],
  },
  {
    title: 'AI-Assisted Development',
    skills: ['ChatGPT', 'Claude Code', 'Cursor', 'GitHub Copilot', 'Prompt Engineering'],
  },
]

export interface ExperienceProject {
  name: string
  bullets: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  bullets: string[]
  projects?: ExperienceProject[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Applaunch Bengaluru Pvt Ltd',
    role: 'Backend Developer',
    period: 'Oct 2025 – Present',
    bullets: [
      'Leveraged AI-assisted development tools including ChatGPT, Claude Code and GitHub Copilot for development, debugging, test generation, research and repetitive engineering tasks.',
      'Followed Agile development practices including code reviews, testing, CI/CD workflows, documentation, performance optimization and collaborative development.',
      'Owned backend feature development end-to-end, from API design and implementation through testing, debugging and production deployment.',
    ],
    projects: [
      {
        name: 'Zimmereifrank',
        bullets: [
          'Built secure JWT authentication with role-based access control and session management.',
          'Designed and developed RESTful APIs for employee, project, vehicle, crane and workforce planning modules.',
          'Implemented leave, holiday and compliance management workflows with audit logging.',
          'Designed scheduling workflows to prevent resource conflicts and optimize resource allocation.',
          'Improved API quality through Swagger/OpenAPI documentation, request validation, structured logging, performance optimization and clean architecture.',
          'Implemented multilingual support across English, German, French, Italian, Dutch and Portuguese.',
        ],
      },
      {
        name: 'Hassel',
        bullets: [
          'Developed secure Node.js/TypeScript backend services using RESTful APIs, JWT authentication, OAuth, OTP verification and refresh-token rotation.',
          'Designed and implemented activity tracking, challenge management, leaderboards, badges and XP reward systems.',
          'Developed friend management, competition, notification and analytics modules.',
          'Designed and optimized MongoDB schemas using indexes and TTL strategies, improving query performance and data access efficiency.',
          'Integrated AWS S3 and CloudFront for cloud-based file storage and content delivery.',
          'Built secure real-time WebSocket communication using JWT-authenticated connections, room-based event delivery and multi-device support for low-latency real-time interactions.',
          'Implemented background schedulers and asynchronous workflows across multiple backend modules, supporting automated processing and scheduled tasks.',
          'Developed Jest unit tests covering notifications, friend/match requests and real-time functionality.',
          'Troubleshot production issues, investigated API failures and backend performance bottlenecks, and implemented fixes to maintain application reliability.',
          'Used Redis for caching and backend performance optimization.',
        ],
      },
    ],
  },
  {
    company: 'Sash Info Services Pvt Ltd',
    role: 'Full Stack Developer',
    period: 'Mar 2025 – Oct 2025',
    location: 'Bengaluru',
    bullets: [
      'Developed backend modules for payments, scheduling, notifications and customer communication workflows.',
      'Integrated WhatsApp APIs, DocuSign and email services to automate business workflows.',
      'Implemented application status notifications through email and in-app alerts.',
      'Managed application deployments and maintenance using WinSCP and PuTTY.',
      'Collaborated on feature development, debugging and production support.',
    ],
  },
  {
    company: 'VSR Stayin LLP',
    role: 'Jr Software Developer',
    period: 'Feb 2023 – Jul 2024',
    location: 'Bengaluru, India',
    bullets: [
      'Developed Order Management and Petty Cash modules using Laravel and Vue.js.',
      'Built secure bulk payment import and receipt-generation workflows.',
      'Integrated REST APIs, email, SMS and Razorpay payment services.',
      'Designed and optimized MySQL databases for application performance.',
      'Managed AWS EC2 deployments, monitoring and application maintenance.',
      'Developed responsive web interfaces and integration tests.',
      'Collaborated through Git/Bitbucket and Jira while following Agile development practices.',
    ],
  },
]

export interface FeaturedProject {
  name: string
  tagline: string
  period: string
  stack: string[]
  highlights: string[]
  highlight?: boolean
  caseStudyUrl?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Zimmereifrank',
    tagline: 'Workforce & resource planning platform for a construction/carpentry business.',
    period: 'Applaunch Bengaluru · 2025',
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'JWT', 'Swagger/OpenAPI'],
    highlights: [
      'RESTful APIs for employee, project, vehicle, crane and workforce planning modules',
      'JWT authentication with role-based access control and session management',
      'Conflict-free scheduling engine for shared resources',
      'Leave, holiday and compliance workflows with audit logging',
      'Multilingual UI support across EN, DE, FR, IT, NL and PT',
    ],
    highlight: true,
  },
  {
    name: 'Hassel',
    tagline: 'Real-time activity, challenge and social fitness platform.',
    period: 'Applaunch Bengaluru · 2025',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'WebSockets', 'Redis', 'AWS S3'],
    highlights: [
      'Activity tracking, challenges, leaderboards, badges and XP reward systems',
      'JWT-authenticated WebSocket connections with room-based multi-device delivery',
      'Friend management, competitions, notifications and analytics modules',
      'MongoDB schemas optimized with indexes and TTL strategies',
      'Background schedulers for automated workflows',
      'Jest coverage for notifications, match requests and real-time flows',
    ],
  },
  {
    name: 'PG Management System',
    tagline: 'Property and PG operations platform for orders, payments and guest management.',
    period: 'VSR Stayin LLP · 2023 – 2024',
    stack: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Razorpay'],
    highlights: [
      'Order management and Petty Cash modules built with Vue.js and Laravel',
      'Secure bulk payment import and automated receipt generation',
      'Razorpay, SMS and email integrations for payments and notifications',
      'Companion mobile app flows for complaints, vacate intimation, bookings and KYC',
      'MySQL schema design and query optimization',
      'AWS EC2 deployment and monitoring',
    ],
  },
  {
    name: 'Business Workflow Automation',
    tagline: 'Backend platform for payments, scheduling and automated customer communication.',
    period: 'Sash Info Services · 2025',
    stack: ['Node.js', 'WhatsApp API', 'DocuSign', 'Email/SMS'],
    highlights: [
      'Backend modules for payments, scheduling and customer communication workflows',
      'WhatsApp API, DocuSign and email integrations to automate business workflows',
      'Application-status notifications across email and in-app channels',
      'Collaborated on feature development, debugging and production support',
    ],
  },
  {
    name: 'ResilYou',
    tagline: 'Mobile wellbeing platform built around resilience rituals, journaling and social accountability.',
    period: 'B2C Wellbeing Platform',
    stack: ['Laravel 9', 'PHP', 'MySQL', 'REST API', 'iOS', 'Android', 'Subscriptions'],
    highlights: [
      'Laravel 9 REST API powering the iOS and Android wellbeing apps',
      'Ritual-based habit programs with exercises, tips, stories and scheduled content',
      'Diary and reflection workflows tied to daily rituals',
      'Grow Buddy social accountability system with private entry rooms and partner chat',
      'Native iOS/Android subscription management with purchase validation and subscription sharing',
      'Admin CMS for managing rituals, exercises, psychoeducation, tips, news and packages',
    ],
  },
]

export interface EducationItem {
  degree: string
  school: string
  location: string
  period: string
  detail?: string
}

export const education: EducationItem[] = [
  {
    degree: 'B.Tech',
    school: 'Jawaharlal Nehru Technological University — College of Engineering (Autonomous)',
    location: 'Pulivendula, India',
    period: '2019 – 2023',
    detail: 'CGPA: 7.56',
  },
]

export const languages = ['English', 'Telugu', 'Hindi']

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
