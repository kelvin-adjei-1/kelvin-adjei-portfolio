const Experience = () => {
  const experiences = [
  {
    title: "Software Developer",
    company: "Charter Communications – Charlotte, NC",
    period: "Oct 2022 – Present",
    description: [
      "Key member of the CORPORTAL team, building and maintaining agent performance applications supporting over 1.5M users.",
      "Developed and enhanced the Performance Tracker Application, integrating dynamic forms, audio, and video call recordings to generate performance metrics.",
      "Contributed to the Scorecard Application for calculating agent metrics, threshold evaluations, and promotion eligibility.",
      "Enhanced the Coaching Application to provide leadership with personalized coaching strategies for agent growth.",
      "Designed and optimized SQL database schemas, queries, and ETL processes to ensure seamless integration of performance data.",
      "Developed and deployed scalable applications using .NET, Angular, Kubernetes (Rancher), and CI/CD pipelines.",
      "Collaborated across teams to enforce coding standards, improve security, and optimize performance.",
      "Supported business objectives by improving agent retention strategies, career pathways, and workforce engagement."
    ]
  },
  {
    title: "Microsoft Cloud Associate Specialist",
    company: "Itlize Global LLC – Piscataway, NJ",
    period: "Aug 2021 – Oct 2022",
    description: [
      "Completed training in .NET, Angular, and Azure to deliver cloud-native enterprise applications.",
      "Contracted as Senior Software Developer for clients, modernizing legacy .NET WinForms applications into .NET/Angular frameworks.",
      "Designed and deployed containerized applications with Kubernetes, improving efficiency and scalability.",
      "Developed solutions for AssistRx to digitize prescription tracking and consent forms, reducing fax dependency and accelerating approvals.",
      "Contributed to Charter Communications’ Credit Calculator application for automated outage and billing credit calculations.",
      "Implemented secure cloud deployments on Azure, following DevOps and CI/CD best practices.",
      "Created complex SQL procedures, views, and functions for real-time data processing and reporting."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "JP Morgan Stanley – Remote",
    period: "Jun 2019 – Aug 2019",
    description: [
      "Developed mobile and digital banking features for 5,000+ retail branches and 17,000 ATMs.",
      "Built scalable software solutions with integrated telemetry, monitoring, and logging for real-time performance tracking.",
      "Worked with Node.js, Python, Java, .NET, React, Angular, MySQL, and NoSQL across various projects."
    ]
  }
];
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900"></div>
              
              {/* Content */}
              <div className="ml-20">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <h4 className="text-lg text-gray-600 dark:text-gray-300">{exp.company}</h4>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
