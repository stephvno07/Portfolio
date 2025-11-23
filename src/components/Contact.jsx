import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Get In Touch</h2>
      <p className="section-subtitle">Have a project? Let's talk.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="explore button send-button">Send Message</button>
      </form>
    </section>
  );
}