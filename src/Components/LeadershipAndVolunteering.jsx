import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Zap, ShieldCheck } from 'lucide-react';

const leadershipData = [
    {
        title: 'Head Usher – Dominion Chapel (May 2022 – April 2025)',
        details: [
            'Led a team of 25 ushers serving a congregation of over 500 members.',
            'Reformed the department’s service culture by defining clear roles and delegating responsibilities.',
            'Focused on macro-level leadership by setting standards of operation and ensuring consistent execution.',
            'Prioritizedsrc/Components/ member-focused decision-making and launched a training scheme to build confidence and soft skills.',
            'Introduced a structured leadership model, reduced internal conflicts, and drafted the department’s first bylaws.',
        ],
        icon: <Users className="w-12 h-12 text-teal-200 mb-4" />,
    },
    {
        title: 'Head Chaplain – Dominion Chapel (Jan 2023 – April 2025)',
        details: [
            'Provided compassionate leadership to a chaplaincy team of 15.',
            'Mentored team members in relational intelligence and emotional sensitivity.',
            'Coordinated outreach initiatives and ministered during services to address overlooked needs in the community.',
        ],
        icon: <User className="w-12 h-12 text-teal-200 mb-4" />,
    },
    {
        title: 'Head of Department, Data & Archive – Dominion Chapel (May 2023 – April 2025)',
        details: [
            'Managed sensitive attendance and membership records for over 500 congregants.',
            'Resolved data-related concerns and streamlined access to information for both members and leaders.',
            'Improved communication flow and member satisfaction through optimized data systems.',
        ],
        icon: <Zap className="w-12 h-12 text-teal-200 mb-4" />,
    },
    {
        title: 'Deputy Head Representative – Leadership Panel (September 2023 – March 2025)',
        details: [
            'Collaborated with 4 senior representatives and over 100 minor reps and councils.',
            'Focused on conflict resolution, leadership recognition, and interdepartmental peacekeeping.',
            'Played an active role in decision-making regarding leadership cases, elections, and organizational disputes.',
        ],
        icon: <ShieldCheck className="w-12 h-12 text-teal-200 mb-4" />,
    },
];

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.7,
            ease: 'easeOut',
        },
    }),
};

function LeadershipAndVolunteering() {
    return (
      <section id="leadership" className="section-offset w-full py-16 bg-teal-900/90"> {/* Ensure full width */}
          <div className="max-w-4xl mx-auto px-8 w-full"> {/* max-width and padding */}
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                  Leadership & Volunteering
              </h2>
              <div className="space-y-10 w-full">
                  {leadershipData.map((item, index) => (
                      <motion.div
                          key={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          custom={index}
                          className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg w-full
                                    ${index % 2 === 0 ? 'bg-teal-800/80' : 'bg-teal-700/80'}
                                    border border-teal-600/50 shadow-md`}
                      >
                          <div className="flex-shrink-0">{item.icon}</div>
                          <div className="w-full">
                              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                              <ul className="list-disc list-inside text-gray-200 space-y-2 text-justify">
                                  {item.details.map((detail, dIndex) => (
                                      <li key={dIndex}>{detail}</li>
                                  ))}
                              </ul>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>
    );
}

export default LeadershipAndVolunteering;
