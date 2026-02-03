// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Erin',
    title: 'Aspiring Data Analyst | BSc Economics with Data Science',
    image: getAsset('images/erin.png.png'),
    description:
      'I am a BSc Economics with Data Science student at CHRIST (Deemed to be University), with a strong interest in data analysis and applied economics.\n' +
      '\n' +
      'My academic journey focuses on using data-driven methods to understand economic trends, solve real-world problems, and support informed decision-making.\n' +
      '\n' +
      'I actively build skills through coursework, projects, and hands-on practice in programming, analytics, and research.',
    tagline: 'Turning data into meaningful insights.',
    location: 'India',
  },

  seo: {
    title: 'Erin – Aspiring Data Analyst',
    description:
      'Portfolio website showcasing education, projects, skills, and research in economics and data science.',
  },

  animatedText: ['Data Analyst', 'Economics Student', 'Data Science', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  blogs: [
    {
      title: 'Introduction to Data-Driven Decision Making',
      url: getAsset('static_page/project_management_blog.html'),
    },
  ],

  education: [
    {
      institution: 'Graisley Primary School',
      degree: 'Primary Education',
      year: '—',
      image: getAsset('images/education/placeholder.png'),
      description: ['Foundational academic education'],
    },
    {
      institution: 'CHRIST (Deemed to be University)',
      degree: 'BSc Economics with Data Science',
      year: '2025–2028',
      image: getAsset('images/education/placeholder.png'),
      description: [
        'Core focus on economics, statistics, and data science',
        'Hands-on experience with analytical tools and programming',
      ],
    },
  ],

  certifications: [
    {
      title: 'Data Science & Analytics Coursework',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Python for Data Analysis', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'SQL & Database Management', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Statistical Methods for Economics', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
  ],

  experience: [
    {
      title: 'Data Analyst (Aspiring)',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Student, CHRIST University',
      time: '(2025 – Present)',
      desp: [
        'Analyzing datasets as part of academic projects',
        'Applying economic theory with data science techniques',
      ],
    },
  ],

  projects: [
    {
      title: 'Economic Data Analysis Project',
      cardImage: getAsset('images/project/placeholder.png'),
      description:
        'Analyzed economic indicators using Python and SQL to identify trends and insights.',
      Githublink: 'https://github.com/your-username/economic-data-analysis',
    },
    {
      title: 'Data Visualization Dashboard',
      cardImage: getAsset('images/project/placeholder.png'),
      description:
        'Built interactive visualizations to communicate data insights effectively.',
      Githublink: 'https://github.com/your-username/data-visualization-dashboard',
    },
  ],

  research: [
    {
      title: 'Applied Data Science in Economic Analysis',
      authors: 'Erin',
      conferences: 'Undergraduate Research, CHRIST University',
      researchYr: 2026,
      image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Erin. Applied Data Science in Economic Analysis. CHRIST University, 2026.',
      },
      abstract:
        'This study explores the use of data science techniques to analyze economic indicators and improve decision-making.',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [],

  contact: {
    email: 'erin@example.com',
    linkedin: 'https://www.linkedin.com/in/erin/',
    github: 'https://github.com/your-username',
    googleScholar: 'https://scholar.google.com/',
    orcid: '',
  },
};

export default siteConfig;
