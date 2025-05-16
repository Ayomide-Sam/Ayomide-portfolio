import React from 'react';

const skillsData = [
  {
    title: '💻 Tech Skills',
    skills: [
      'HTML, CSS, JavaScript (Basic)',
      'React (with Vite)',
      'Tailwind CSS',
      'PHP (CodeIgniter 4)',
      'Flutter (Mobile UI)',
      'RESTful APIs',
      'Git & Version Control',
    ],
  },
  {
    title: '💼 Product & Business',
    skills: [
      'Product & Software Development Lifecycle',
      'Figma (Wireframing & UI)',
      'Documentation & Workflow Planning',
    ],
  },
  {
    title: '🤝 Soft Skills',
    skills: [
      'Team Leadership & Delegation',
      'Conflict Resolution & Communication',
      'Problem Solving & Critical Thinking',
      'Empathy & User-Centred Decision Making',
    ],
  },
  {
    title: '🔧 Tools & Other',
    skills: ['Postman (API Testing)', 'GitHub', 'AI Prompting (ChatGPT, Gemini)'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-offset py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text">
          My Skills & Abilities
        </h2>

        {/* Flexbox approach instead of grid */}
        <div className="flex flex-wrap -mx-3">
          {skillsData.map((category, index) => (
            <div key={index} className="md:w-1/2 px-3 mb-6">
              <div className="h-full bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10
                            transition-all duration-500
                            hover:scale-[1.02] hover:shadow-teal-500/20 hover:border-teal-500/20">
                <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="bg-black/20 p-2 rounded-lg border border-white/5
                                hover:bg-teal-500/10 transition-colors duration-400
                                text-gray-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;