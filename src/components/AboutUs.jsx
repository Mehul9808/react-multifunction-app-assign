// src/components/AboutUs.js

import React from 'react';


function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <section className="company-info">
        <h2>Our Company</h2>
        <p>
          Welcome to Ambula! We are dedicated to providing top-notch solutions for all your needs. With a passion for innovation and a commitment to excellence, we strive to exceed our clients' expectations.
        </p>
      </section>
      <section className="team-info">
        <h2>Our Team</h2>
        <p>
          Our team consists of highly skilled professionals with diverse expertise in various fields. We work collaboratively to ensure the highest quality of service and customer satisfaction.
        </p>
      </section>
      <section className="project-info">
        <h2>Our Project</h2>
        <p>
          Our current project is a multi-functional application that integrates a To-Do List, Shopping Cart, and Weather App. Designed to enhance user experience and functionality, this project showcases our team's technical capabilities and innovative approach.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
