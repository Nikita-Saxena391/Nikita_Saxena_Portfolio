import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const About = () => (
  <SectionWrapper id="about" title="About Me">
    <div className="max-w-4xl mx-auto text-center text-lg md:text-xl text-light-text/80 dark:text-dark-text/80 leading-relaxed">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        I'm a passionate and performance-driven student with a deep interest in <strong>Full Stack Development </strong> and a strong command over <strong>Data Structures and Algorithms</strong>. My journey in tech has been shaped by a relentless curiosity and a love for solving complex challenges through clean, efficient code.
      </motion.p>
      <motion.p
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        I've solved over <span className="font-semibold text-light-primary dark:text-dark-primary">1000+ coding problems</span> across platforms like LeetCode, GeeksforGeeks, Coding Ninjas, Codeforces gaining deep insights into algorithmic thinking and optimization. I'm proficient in languages like <strong>Java and C++</strong>, and regularly apply these skills in building projects.       </motion.p>
      <motion.p
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        On the development side, I work comfortably across the <strong>Spring Boot</strong> for backend development and use <strong>React, HTML, JavaScript and CSS</strong> for modern, responsive front-end interfaces.I build full-stack web applications, I enjoy tackling challenging problems. I'm always looking to push boundaries, and stay at the forefront of AI and software innovation.
      </motion.p>
    </div>
  </SectionWrapper>
);
export default About;