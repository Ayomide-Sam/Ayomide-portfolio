import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="section-offset bg-white px-6 sm:px-8 py-16 sm:py-20 text-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-navy">
          Education
        </h2>
        <div className="bg-gray-100 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-teal-700">
            Babcock University
          </h3>
          <p className="text-base sm:text-lg mt-1 font-medium">
            B.Sc. in Computer Information Systems (2022 – 2025)
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-justify text-base sm:text-lg">
            During my time at Babcock University, I pursued both academic excellence and active leadership. I took on 
            significant roles within the Dominion Chapel — serving as <strong>Head Usher</strong>, <strong>Head Chaplain</strong>, 
            and <strong>Head of the Data and Archive Department</strong> — where I coordinated teams, made time-sensitive decisions, 
            and led initiatives that improved internal operations.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-justify text-base sm:text-lg">
            My final-year project focused on the <em>design and implementation of a student performance feedback system</em>, 
            where I explored how technology can enhance communication between students and faculty. Throughout the program, 
            I took a combination of technical and business courses, including <strong>Software Engineering Principles</strong>, 
            <strong> C++ and Java Programming</strong>, <strong>Data Structures & Algorithms</strong>, <strong>Database Management</strong>, 
            <strong> Principles of Accounting</strong>, <strong>Cost Accounting</strong>, and <strong>Labour Economics</strong>. 
            This blend helped me develop a balanced academic foundation across technology and business disciplines.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-justify text-base sm:text-lg">
            This season of my life taught me how to work with structure, collaborate with intention, and lead in ways that are both organized
             and people-focused — values I now carry forward as I grow into my professional journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
