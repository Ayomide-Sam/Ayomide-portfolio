import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="section-offset px-8 py-16 bg-gradient-to-b from-teal-900 to-teal-700 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">About Me</h2>
        <div className="mt-6 text-base sm:text-lg md:text-xl text-gray-200">
          <p className="mb-4 sm:mb-6 md:mb-8 text-justify leading-relaxed">
            I’m Ayomide Samuel Ojo — a curious mind, a natural organizer, and someone who finds joy in solving meaningful problems. I recently graduated with a degree in <strong>Computer Information Systems</strong> from <strong>Babcock University</strong>, but my journey goes beyond lectures and projects.
          </p>
          <p className="mb-4 sm:mb-6 md:mb-8 text-justify leading-relaxed">
            Growing up, I’ve always gravitated toward roles that let me lead, listen, and bring people together — whether I was coordinating events at church or helping peers navigate challenges. These moments shaped my passion for leadership, people-centered problem-solving, and ultimately, <strong>product management</strong>.
          </p>
          <p className="mb-4 sm:mb-6 md:mb-8 text-justify leading-relaxed">
            During my time at Babcock, I didn’t just study systems — I helped improve them. Through the <strong>Ushering Department</strong>, <strong>Chaplaincy</strong>, and <strong>Data & Archive Team</strong>, I learned how much impact clear communication, intentional planning, and empathy can have on both teams and outcomes.
          </p>
          <p className="mb-4 sm:mb-6 md:mb-8 text-justify leading-relaxed">
            Outside work and school, I enjoy learning how things work (especially digital products), exploring interesting documentaries, and finding quiet moments to reflect and grow. I believe in doing the right thing — always — and I thrive when I’m learning, building, or leading with purpose.
          </p>
          <p className="mb-4 sm:mb-6 md:mb-8 text-justify leading-relaxed">
            I'm at the start of my <strong>product management</strong> journey, and I’m excited to keep growing. If you’re looking for someone who’s passionate, grounded, and ready to learn — I’d love to connect.
          </p>
        </div>

        <div className="mt-12 text-left">
          <h3 className="text-xl font-semibold mb-4">Core Values:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
              <p className="text-lg font-medium text-teal-500">Honesty</p>
              <p className="text-gray-700">Transparency and integrity are essential to building trust in every interaction.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
              <p className="text-lg font-medium text-teal-500">Integrity</p>
              <p className="text-gray-700">Doing the right thing, even when no one is watching, is at the core of my actions.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
              <p className="text-lg font-medium text-teal-500">Growth Mindset</p>
              <p className="text-gray-700">I believe in the power of learning and constantly improving both personally and professionally.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
              <p className="text-lg font-medium text-teal-500">Resilience</p>
              <p className="text-gray-700">I stay grounded through challenges, adapt quickly, and bounce back stronger.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
