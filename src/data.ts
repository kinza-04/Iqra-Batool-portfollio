import { Project, WorkExperience, Education, Service, FAQItem } from './types';

export const personalInfo = {
  name: 'Iqra Batool',
  title: 'Professional Web & WordPress Developer',
  tagline: 'Crafting pixel-perfect, high-performance web experiences that drive business growth.',
  about: 'Web Developer with three years of experience making websites that people can use easily. I specialize in WordPress customization, responsive front-end layouts, troubleshooting, and search engine optimization. My goal is to build sites that load instantly, rank high, and help businesses expand their digital presence.',
  email: 'iiqraaa122@gmail.com',
  phone: '+923226013425',
  whatsappUrl: 'https://wa.me/923226013425',
  linkedinUrl: 'https://www.linkedin.com/in/iqra-batool33/',
  avatarUrl: '/src/assets/images/iqra_realistic_photo_1783580217182.jpg',
  fallbackAvatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
  location: 'Sargodha, Pakistan',
  experienceYears: '3+',
  completedProjects: '50+',
  clientSatisfaction: '100%',
  languages: [
    { name: 'English', level: 'Professional / Fluent' },
    { name: 'Urdu', level: 'Native / Basic' }
  ]
};

export const skillsData = {
  frontend: [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web Design', 'Tailwind CSS', 'Bootstrap'
  ],
  wordpress: [
    'WordPress CMS', 'Elementor / Elementor Pro', 'WooCommerce', 'Theme Customization', 'Plugin Customization', 'JetEngine / ACF', 'Page Builders'
  ],
  tools: [
    'Bug Fixing & Troubleshooting', 'Speed Optimization (Core Web Vitals)', 'On-Page SEO', 'Figma to WordPress / HTML', 'Git & GitHub', 'cPanel & Hosting Management'
  ],
  soft: [
    'Client Communication', 'Time Management', 'Problem Solving', 'Project Management'
  ]
};

export const services: Service[] = [
  {
    id: 'wp-dev',
    title: 'WordPress Developer Service',
    description: 'High-end custom WordPress development. From simple landing pages to complex corporate portals and e-commerce stores using Elementor Pro, Gutenberg, and premium themes.',
    iconName: 'Globe',
    features: [
      'Custom Theme & Plugin Configuration',
      'Advanced Custom Fields (ACF) & JetEngine integrations',
      'Elementor Pro & Divi Visual Customization',
      'Figma/Adobe XD to WordPress conversion',
      'WooCommerce full setup & custom checkout funnels'
    ]
  },
  {
    id: 'frontend-dev',
    title: 'Front-End Web Development',
    description: 'Pixel-perfect, lightweight, and modern front-end layout development. Converting design designs into clean, semantic, and highly responsive web code using HTML, CSS, Tailwind, and JavaScript.',
    iconName: 'Code',
    features: [
      'Responsive, mobile-first design architecture',
      'Clean, structured, and easy-to-maintain code',
      'Modern styling with Tailwind CSS & CSS Grid',
      'Interactive animations using Framer Motion',
      'Cross-browser rendering and accessibility (WCAG) checks'
    ]
  },
  {
    id: 'bug-fixing',
    title: 'Bug Fixing & Troubleshooting',
    description: 'Quick diagnostics and emergency troubleshooting. Resolving plugin conflicts, layout breakage across screen sizes, PHP/JavaScript errors, and styling inconsistencies.',
    iconName: 'Wrench',
    features: [
      'Detailed plugin & theme conflict audits',
      'Responsive design and viewport bug resolution',
      'PHP memory errors & database connection fixes',
      'Browser compatibility issues addressed',
      'Website backup, migration, and updates management'
    ]
  },
  {
    id: 'seo-speed',
    title: 'SEO & Speed Optimization',
    description: 'Unlock peak performance and higher search engine rankings. Drastic reduction in website loading speeds, database optimization, image compression, and search engine structural audit.',
    iconName: 'Zap',
    features: [
      '90+ score audit on Google PageSpeed Insights',
      'Core Web Vitals optimization (LCP, FID, CLS)',
      'Advanced caching & minification protocols',
      'On-page SEO setup (Meta tags, sitemaps, schemas)',
      'Cloudflare CDN configuration'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'electro-shop',
    title: 'ElectroShop WooCommerce E-Commerce Portal',
    description: 'A fully-featured high-conversion electronic equipment e-commerce store. Built using WordPress, Elementor Pro, and customized WooCommerce checkout engines to optimize transaction pipelines.',
    category: 'E-Commerce',
    image: '/src/assets/images/project_ecommerce_1783579243039.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1472851294608-062f824d296e?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Speed Optimization', 'Stripe Integration'],
    features: [
      'Customized cart, checkout, and thank-you funnels for maximum conversion',
      'Advanced live search and multi-attribute product filters',
      'Real-time automated shipping rates and dynamic VAT calculations',
      'Highly secure stripe, debit card, and PayPal integration layers',
      'PageSpeed Optimization with lightweight WebP imagery and lazy loads'
    ],
    client: 'ElectroShop Retail Ltd.',
    duration: '4 Weeks',
    role: 'Lead WordPress & WooCommerce Developer'
  },
  {
    id: 'apex-corporate',
    title: 'Apex Solutions - Corporate Agency Portal',
    description: 'A luxurious business solutions portal built for a multinational agency. Features interactive customer booking forms, custom filterable portfolio galleries, and responsive visual layout structures.',
    category: 'WordPress',
    image: '/src/assets/images/project_corporate_1783579261421.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['WordPress', 'Elementor', 'Theme Customization', 'Multilingual (WPML)', 'SEO'],
    features: [
      'Custom Elementor widgets designed specifically for corporate identity',
      'Automated dynamic client appointment booking with email notifications',
      'A highly optimized, SEO-friendly on-page semantic outline for Google ranking',
      'Dual-language support built using the official WPML engine',
      'Elegant, light/dark transition elements matching professional aesthetic'
    ],
    client: 'Apex Digital Solutions',
    duration: '3 Weeks',
    role: 'Senior WordPress Developer'
  },
  {
    id: 'saasify-landing',
    title: 'SaaSify Product Showcase Landing Page',
    description: 'An incredibly modern, fast-loading visual landing page designed to capture marketing leads. Developed entirely in custom semantic markup, utilizing beautiful Tailwind grids and dynamic scroll-triggered transitions.',
    category: 'Front-End',
    image: '/src/assets/images/project_landing_1783579283962.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Figma to Code'],
    features: [
      '100% pixel-perfect conversion from Figma design asset layout',
      'Ultra-lightweight footprint with near-instant loading speeds',
      'Fully localized CSS animation assets triggering on visual view entry',
      'Custom Mailchimp API newsletter sign-up integrations',
      'Extensively tested on over 15 different mobile viewport sizes'
    ],
    client: 'SaaSify Software Systems',
    duration: '2 Weeks',
    role: 'Front-End Developer'
  },
  {
    id: 'caresync-healthcare',
    title: 'CareSync Medical Booking & Directory Portal',
    description: 'A multi-provider directory and appointment scheduling solution built for clinics and individual doctors. Connects users with nearby physicians and handles real-time time-slot reservations.',
    category: 'WordPress',
    image: '/src/assets/images/project_booking_1783579305567.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1504813184591-015578994472?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['WordPress', 'JetEngine', 'Elementor', 'Custom Post Types', 'Booking Systems'],
    features: [
      'Custom Post Types (CPT) and Custom Taxonomies for specialty grouping',
      'Interactive geo-location searches and medical specialty tags',
      'A real-time visual booking calendar managing distinct slot allocations',
      'Separate physician portal profiles and custom input metadata blocks',
      'HIPAA-compliant custom intake questionnaire forms'
    ],
    client: 'CareSync Healthcare Network',
    duration: '6 Weeks',
    role: 'Lead Systems Developer'
  },
  {
    id: 'vitals-opt',
    title: 'SpeedOptimizer - Core Web Vitals Refactoring',
    description: 'A heavy-duty maintenance and speed optimization project targeting a high-traffic media portal. Replaced slow visual blocks, minified JS payloads, configured robust caching, and restored search-engine crawl efficiency.',
    category: 'SEO & Performance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Core Web Vitals', 'PageSpeed', 'Caching Protocols', 'SEO Schemas', 'cPanel Management'],
    features: [
      'Reduced Mobile Page Load duration from 7.4 seconds to 1.3 seconds',
      'Dramatically resolved Cumulative Layout Shifts (CLS) and LCP render blocks',
      'Designed a multi-tier server-level caching layout with W3 Total Cache',
      'Integrated Cloudflare Edge CDN for distributed rapid content delivery',
      'Implemented advanced schema markup structures to optimize Google Rich Snippets'
    ],
    client: 'TechVibe Newsroom',
    duration: '1 Week',
    role: 'Performance Optimization Specialist'
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: 'exp-1',
    role: 'Wordpress Developer',
    company: 'Codesthinker',
    duration: '2023 – Present',
    points: [
      'Developed and customized high-end WordPress websites for corporate and e-commerce clients across various retail and digital industries.',
      'Created modern, fully responsive, and mobile-first website layouts using Elementor, Gutenberg, and premium visual builders.',
      'Performed proactive daily website maintenance, extensive database optimization, troubleshooting, and robust Google Core Web Vitals speed tuning.',
      'Collaborated closely with clients to understand business requirements, transforming ideas into highly performant and user-friendly web assets.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Front-End Web Developer',
    company: 'SK Solution',
    duration: '2020 – 2022',
    points: [
      'Built high-fidelity, interactive, and responsive web pages using semantic HTML5, modern CSS3 (Flexbox/Grid), and ES6+ JavaScript.',
      'Converted complex, pixel-perfect Figma and Adobe XD design mockups into semantic, lightweight, and user-accessible web code.',
      'Collaborated intensely with back-end engineers and design teams to ensure seamless layouts and optimized client-side performance.'
    ]
  },
  {
    id: 'exp-3',
    role: 'WordPress Developer Intern',
    company: 'Nitro9',
    duration: 'June 2019 – Dec 2019',
    points: [
      'Assisted in configuring, developing, and preserving clients\' WordPress sites, deploying themes, widgets, and major plugins.',
      'Customized and debugged existing PHP structures, page templates, style sheets, and Elementor components.',
      'Learned and implemented industry best practices for secure web hosting, cPanel configuration, on-page SEO keywords, and performance testing.',
      'Fixed cross-browser visual rendering glitches, mobile responsiveness breaks, and minor security vulnerabilities.'
    ]
  }
];

export const educationHistory: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Science',
    school: 'University of Sargodha',
    duration: '2019 – 2022',
    field: 'Computer Science & Software Engineering'
  },
  {
    id: 'edu-2',
    degree: 'Intermediate in Computer Science',
    school: 'AnyRose College',
    duration: '2017 – 2019',
    field: 'Physics, Mathematics, Computer Science'
  },
  {
    id: 'edu-3',
    degree: 'Matric in Biology',
    school: 'Govt Higher Secondary School',
    duration: '2015 – 2017',
    field: 'Science, Biology, Chemistry, Physics'
  }
];

export const faqs: FAQItem[] = [
  {
    question: 'What technologies do you use for website development?',
    answer: 'I specialize in WordPress (Elementor Pro, Custom Themes, WooCommerce, JetEngine, ACF) as well as modern custom Front-End web technologies like HTML5, CSS3, ES6+ JavaScript, Tailwind CSS, and React for custom landing pages.'
  },
  {
    question: 'Can you convert a custom Figma, Adobe XD, or PDF design into WordPress?',
    answer: 'Yes! I have extensive experience converting design layouts (Figma, Adobe XD, Photoshop, Sketch, or static images) into pixel-perfect, highly responsive, and fast-loading WordPress pages using Elementor or clean hand-coded HTML/CSS.'
  },
  {
    question: 'Do you offer website speed and SEO optimization services?',
    answer: 'Absolutely! I do in-depth speed optimization, bringing mobile PageSpeed scores above 90. This includes image compressions, database tuning, asset deferral/minification, and leveraging advanced caching. I also set up essential on-page SEO (meta tags, sitemaps, structured schema data) to boost visibility on Google.'
  },
  {
    question: 'How do we communicate during a project?',
    answer: 'I prefer clear and professional communication. We can chat or coordinate on WhatsApp, Email, or LinkedIn. I provide regular progress updates and interactive milestone previews so you are always in the loop!'
  },
  {
    question: 'Do you offer maintenance and troubleshooting support?',
    answer: 'Yes, I provide continuous support, plugin updates, emergency bug fixing, database backups, security patches, and styling adjustment services to ensure your website remains modern and completely secure.'
  }
];
