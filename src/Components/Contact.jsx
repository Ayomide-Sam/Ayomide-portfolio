import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Linkedin, Github } from 'lucide-react';

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSent(false);

    emailjs
      .sendForm(
        'service_xv1aorp',     
        'template_1axe74f',    
        formRef.current,
        'C0bdhXIf8eq5LpaBM'      
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
        },
        () => {
          setError(true);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <footer id="contact" className="section-offset bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-6">Get in Touch</h2>
        <p className="mb-6">
          I'm always open to discussing new projects or opportunities. Send a message or connect via socials.
        </p>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left max-w-xl mx-auto">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {sent && <p className="text-green-400 mt-2 text-center">Message sent successfully!</p>}
          {error && <p className="text-red-400 mt-2 text-center">Failed to send. Try again later.</p>}
        </form>

        {/* Contact Info */}
        <div className="mt-10 space-y-2">
          <p>
            📧{' '}
            <a href="mailto:ayomidesamuel.ojo@yahoo.com" className="text-teal-400 hover:underline">
              ayomidesamuel.ojo@yahoo.com
            </a>
          </p>
          <p>
            📧{' '}
            <a href="mailto:ayomidesamuel1110@gmail.com" className="text-teal-400 hover:underline">
              ayomidesamuel1110@gmail.com
            </a>
          </p>
          <p>
            📞{' '}
            <a href="tel:+2349069945112" className="text-teal-400 hover:underline">
              +234 906 994 5112
            </a>
          </p>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/ayomide-samuel-38b083275/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/Ayomide-Sam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            <Github className="w-7 h-7" />
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Ayomide Samuel Ojo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
