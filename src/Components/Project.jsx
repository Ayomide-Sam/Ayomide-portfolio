import React, { useState } from 'react';

function Projects() {
  const projectsData = [
    {
      title: 'Visitor Management System',
      description: 'A full-stack solution for managing visitor check-in and check-out processes, built with role-based access for receptionists and administrators. The system includes both a web interface and a mobile application to streamline the visitor management workflow.',
      techStack: 'Web – HTML, CSS, PHP (CodeIgniter 4) | Mobile – Flutter | API – RESTful (PHP with CodeIgniter 4)',
      responsibilities: 'Developed both frontend and backend components, designed and implemented REST APIs, and ensured seamless data flow between the web and mobile platforms.',
      impact: 'Strengthened my understanding of system architecture, full-stack development, and real-world platform integration.',
      githubLink: 'https://github.com/Ayomide-Sam/VisitorLog.git',
    },
    {
      title: 'Student Performance Feedback System',
      description: 'This project enables academic stakeholders to provide structured performance feedback to students, allowing for clear tracking and communication of student progress over time.',
      techStack: 'PHP (CodeIgniter 4), React, RESTful API',
      responsibilities: 'Designed and developed backend logic, built APIs to handle data transactions, and ensured a smooth integration with a React-based frontend.',
      impact: 'Reinforced my skills in backend development, API design, and effective communication between frontend and backend systems.',
      githubLink: 'https://github.com/Chrisemeka/Grade-Track.git',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A one-page, responsive portfolio built with React and Tailwind CSS using Vite. This project showcases my background, values, skills, and projects in an intuitive and engaging layout.',
      techStack: 'React, Tailwind CSS, Vite',
      responsibilities: 'Defined the structure, content, and flow of the portfolio, edited and adapted code generated through AI prompts, and made design decisions to improve usability and aesthetic consistency.',
      learned: 'Developed practical skills in AI prompting, debugging, and layout customization. I also gained firsthand experience in making user-centered decisions, aiming for intuitive flow and clarity in content presentation.',
      impact: 'This project became both a learning ground and a representation of my ability to apply product-thinking principles—even as a beginner—while growing my technical skills in a self-directed way.',
      githubLink: 'https://github.com/Ayomide-Sam/Ayomide-portfolio.git',
    },
  ];

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="section-offset px-8 py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">Projects</h2>

        <div className="space-y-6">
          {projectsData.map((project, index) => {
            const isActive = expandedProject === index;
            return (
              <div key={index} className="bg-white rounded-md shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleProject(index)}
                  className={`
                    w-full text-center p-4 font-semibold transition-colors duration-300
                    ${isActive
                      ? 'bg-teal-500 text-navy border-l-4 border-navy'
                      : 'bg-[#0a192f] text-white hover:text-teal-400 hover:bg-[#0a192f]'}
                  `}
                >
                  {project.title}
                </button>

                <div
                  className={`
                    transition-all duration-500 ease-in-out overflow-hidden
                    ${isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="p-6 bg-gray-50 flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="text-justify">
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        {project.techStack && <li><strong>Tech Stack:</strong> {project.techStack}</li>}
                        {project.responsibilities && <li><strong>Responsibilities:</strong> {project.responsibilities}</li>}
                        {project.learned && <li><strong>What I Learned:</strong> {project.learned}</li>}
                        {project.impact && <li><strong>Impact:</strong> {project.impact}</li>}
                      </ul>
                    </div>

                    {project.githubLink && (
                      <div className="md:ml-auto mt-2 md:mt-0">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-teal-500 text-white font-bold py-2 px-4 rounded-md transition duration-300 hover:bg-teal-400 hover:text-white"
                        >
                          View on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
