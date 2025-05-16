import React from 'react';

function Internships() {
  return (
    <section id="experience" className="section-offset px-6 py-16 bg-[#0a192f] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Experience</h2>

        <div className="relative border-l-4 border-teal-500 pl-8 space-y-12">

          {/* Softcity Internship */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-md"></div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300" onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 15px rgba(13, 148, 136, 0.5)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
              <h3 className="text-xl font-semibold text-teal-700">Product Management Intern — Softcity Group</h3>
              <p className="text-sm text-gray-500 italic mb-4">2 months (January 2024 - Feburary 2024)</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Joined client meetings to gather insights on user expectations and product direction.</li>
                <li>Conducted manual unit testing to identify bugs, inconsistencies, and usability gaps.</li>
                <li>Documented defects in Microsoft Excel and communicated findings with the supervisor.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600"><strong>Key Takeaway:</strong> Hands-on experience with manual testing and understanding of QA workflows.</p>
            </div>
          </div>

          {/* Ciphernet Internship */}
          <div className="relative">
            <div className="absolute -left-4 top-1 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-md"></div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300" onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 15px rgba(13, 148, 136, 0.5)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
              <h3 className="text-xl font-semibold text-teal-700">Software Development Intern — Ciphernet Technologies</h3>
              <p className="text-sm text-gray-500 italic mb-4">6 months (March 2024 - August 2024)</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Learned foundational software development practices from scratch.</li>
                <li>Built frontend projects using HTML, CSS, and JavaScript.</li>
                <li>Implemented backend logic using PHP and CodeIgniter 4.</li>
                <li>Created REST APIs to support mobile applications built with Flutter.</li>
                <li>Tested and validated API endpoints using Postman.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600"><strong>Key Takeaway:</strong> Built a solid full-stack development foundation with exposure to real-world workflows.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Internships;
