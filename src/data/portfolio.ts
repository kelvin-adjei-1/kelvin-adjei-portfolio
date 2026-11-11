export const contact = {
  email: 'kpkadjei1@gmail.com',
  location: 'Charlotte, NC',
  github: 'https://github.com/kelvin-adjei-1',
  linkedin: 'https://www.linkedin.com/in/kelvin-adjei/',
};

export const projects = [
  {
    title: 'Property Management Console',
    category: 'Web platform',
    description: 'A real estate platform for property listings, tenant management, rent payments, and real-time property dashboards.',
    details: 'Includes AI Aku, a chatbot for rental questions and budget calculations, an MCP server connecting the model to backend services, and the Rent Calculator Ghana tool.',
    link: 'https://pmconline.global/',
    linkLabel: 'Visit pre-release',
    secondaryLink: 'https://pmconline.global/rent-calculator',
    secondaryLabel: 'Rent Calculator Ghana',
  },
  {
    title: 'UniShare iOS Application',
    category: 'Mobile',
    description: 'An iOS marketplace designed for Swarthmore College students to buy, sell, and rent goods from their peers.',
    details: 'A campus-focused concept for making it easier to share and find items within the student community.',
  },
  {
    title: 'Water Level Monitoring IoT Device',
    category: 'Internet of Things',
    description: 'An IoT water level monitoring system that brings real-time sensor readings into a custom visualization dashboard.',
    details: 'Connects physical sensing with a digital interface for monitoring water levels.',
  },
  {
    title: 'URSIM Robot Simulator',
    category: 'Simulation',
    description: 'An educational virtual robot simulator that lets users navigate robots in a 3D environment.',
    details: 'Designed to make robot navigation accessible in a virtual learning environment.',
  },
];

export const skills = [
  { title: 'Languages', description: 'The building blocks behind my applications.', items: ['C#', 'Java', 'Python', 'JavaScript'] },
  { title: 'Frameworks & UI', description: 'Building web and desktop experiences.', items: ['.NET', 'Angular', 'Node.js', 'React', 'WinForms'] },
  { title: 'Databases', description: 'Designing and working with application data.', items: ['Microsoft SQL Server', 'MySQL', 'NoSQL', 'MongoDB', 'SQL queries', 'Relational database design'] },
  { title: 'Data & reporting', description: 'Connecting data and making it useful.', items: ['ETL processes', 'Data integration', 'Active Reports'] },
  { title: 'Cloud & DevOps', description: 'Deploying and operating scalable applications.', items: ['Azure', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Rancher', 'CI/CD', 'Containerization'] },
  { title: 'Engineering practices', description: 'Maintaining and improving software over time.', items: ['Testing & debugging', 'Cloud deployment', 'Application modernization'] },
] as const;

export const experiences = [
  {
    title: 'Software Developer',
    company: 'Charter Communications',
    location: 'Charlotte, NC',
    period: 'Oct 2022 – Oct 2026',
    highlights: [
      'Built and maintained CORPORTAL agent performance applications supporting over 1.5 million users.',
      'Enhanced Performance Tracker, Scorecard, and Coaching applications, and contributed to AI-assisted coaching recommendations.',
      'Designed SQL schemas, queries, and ETL processes; deployed applications with .NET, Angular, Kubernetes, Rancher, and CI/CD.',
    ],
  },
  {
    title: 'Microsoft Cloud Associate Specialist',
    company: 'Itlize Global LLC',
    location: 'Piscataway, NJ',
    period: 'Aug 2021 – Oct 2022',
    highlights: [
      'Modernized legacy .NET WinForms applications with .NET and Angular and deployed containerized applications to Azure.',
      'Built healthcare solutions for AssistRx supporting prescription tracking and digital consent for about 40,000 patients.',
      'Contributed to Charter’s Credit Calculator and developed SQL procedures, views, and functions for reporting.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'JP Morgan Stanley',
    location: 'Remote',
    period: 'Jun 2019 – Aug 2019',
    highlights: [
      'Developed mobile and digital banking features and integrated telemetry, monitoring, and log aggregation.',
      'Worked with Node.js, Python, Java, .NET, React, Angular, MySQL, and NoSQL.',
    ],
  },
];
