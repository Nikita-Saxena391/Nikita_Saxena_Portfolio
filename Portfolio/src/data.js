import React from 'react';
import { FaBriefcase, FaChartLine, FaCertificate, FaUserGraduate, FaLightbulb, FaTrophy, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiMongodb, SiExpress, SiCplusplus, SiPostman, SiFigma, SiStreamlit, SiReact, SiNodedotjs, SiJavascript, SiPython, SiHtml5, SiCss3, SiGit, SiGithub, SiSpringboot } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';


import internship from './assets/achievement/Internship.jpeg';


import Codolio from './assets/achievement/Codolio.jpeg';
import NPTEL from './assets/achievement/NPTEL.jpeg';
import Shefi from './assets/achievement/Shefi.jpeg';
import SpringBoot from './assets/achievement/SpringBoot.jpeg';
import frontend from './assets/achievement/frontend.jpeg';
import hms1 from './assets/projects/hms1.jpeg';
import Portfolio from './assets/projects/Portfolio.jpeg';
import Portfolio_1 from './assets/projects/Portfolio_1.jpeg';
import Portfolio_2 from './assets/projects/Portfolio_2.jpeg';
import Portfolio_3 from './assets/projects/Portfolio_3.jpeg';
import hms2 from './assets/projects/hms2.jpeg';
import hms3 from './assets/projects/hms3.jpeg';
import hms4 from './assets/projects/hms4.jpeg';
import hms5 from './assets/projects/hms5.jpeg';       
import hms6 from './assets/projects/hms6.jpeg';
import hms7 from './assets/projects/hms7.jpeg';
import hms8 from './assets/projects/hms8.jpeg';
import hms9 from './assets/projects/hms9.jpeg';
import hms10 from './assets/projects/hms10.jpeg';
import hms11 from './assets/projects/hms11.jpeg';
import hms12 from './assets/projects/hms12.jpeg';

import fit1 from './assets/projects/Fit1.jpeg';
import fit2 from './assets/projects/Fit2.jpeg';
import fit3 from './assets/projects/Fit3.jpeg';
import fit4 from './assets/projects/Fit4.jpeg';
import fit5 from './assets/projects/Fit5.jpeg';
import fit6 from './assets/projects/Fit6.jpeg';
import fit7 from './assets/projects/Fit7.jpeg';
import fit8 from './assets/projects/Fit8.jpeg';
import fit9 from './assets/projects/Fit9.jpeg';
import fit10 from './assets/projects/Fit10.jpeg';
import fit11 from './assets/projects/Fit11.jpeg';
import fit12 from './assets/projects/Fit12.jpeg'; 
import fit13 from './assets/projects/Fit13.jpeg';
import fit14 from './assets/projects/Fit14.jpeg';
import Shaastra from './assets/achievement/Shaastra.jpeg';

// --- DATA ---
export const navLinks = [
  { name: 'About', href: '#about' }, { name: 'Skills', href: '#skills' }, { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' }, { name: 'Achievements', href: '#achievements' }, { name: 'Contact', href: '#contact' },
];
export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/nikita-saxena-928672320/', github: 'https://github.com/Nikita-Saxena391', codolio: 'https://codolio.com/profile/zaGgcLqF',
};

export const skillsData = {
  languages: [ { name: 'C++', icon: SiCplusplus }, { name: 'Java', icon: FaJava }, { name: 'JavaScript', icon: SiJavascript }, ],
  frontend: [ { name: 'HTML5', icon: SiHtml5 }, { name: 'CSS3', icon: SiCss3 }, { name: 'Tailwind CSS', icon: SiTailwindcss }, { name: 'React.js', icon: SiReact }, { name: 'Vite', icon: SiVite }, ],
  backend: [ { name: 'Spring Boot', icon: SiSpringboot }, { name: 'MySQL', icon: SiMysql },],
  // Ml_Datascience: [ { name: 'Python', icon: SiPython }, { name: 'Machine Learning', icon: FaBriefcase }, ],
  tools: [ { name: 'Git', icon: SiGit }, { name: 'GitHub', icon: SiGithub }, { name: 'Postman', icon: SiPostman } ],
};


export const projectsData = [
    {
  title: 'MedPlus – Hospital Management System',
  image: hms1, // hms1.jpeg (YOUR image)
  description: 'A comprehensive Hospital Management System built using Spring Boot to streamline patient care and hospital operations.',
  tags: ['Spring Boot', 'Java', 'MySQL', 'REST API', 'HTML', 'CSS', 'JavaScript'],
  live: '',
  source: 'https://github.com/Nikita-Saxena391/MedPlus',
  features: [
    'Role-based authentication for Admin, Doctor, and Patient',
    'Patient registration, appointment booking, and medical record management',
    'Doctor dashboard with scheduling and diagnosis management',
    'Admin panel for managing departments, doctors, and hospital resources',
    'Secure REST APIs using Spring Boot and layered architecture',
    'Database persistence with JPA & Hibernate (MySQL)',
    'Responsive UI for seamless cross-device usage'
  ],
  details: {
    problem:
      'Hospitals often rely on fragmented or manual systems, causing inefficiencies in appointment handling and patient data management.',
    solution:
      'MedPlus centralizes hospital workflows into a secure Spring Boot–powered system with role-based access, structured APIs, and reliable data persistence.',
    challenges:
      'Implementing role-based access, designing scalable REST endpoints, and managing entity relationships using Hibernate while maintaining clean architecture.',
    images: [ hms1,hms2,hms3,hms4,hms5,hms6,hms7,hms8,hms9,hms10,hms11,hms12]
  }
},
{
  title: 'AI Fitness Tracker',
  image: fit1,
  description: 'An AI-powered fitness tracking web application that helps users monitor calories, set fitness goals, track workouts, and analyze food images using Google Gemini AI.',
  tags: ['React', 'Strapi', 'Tailwind CSS', 'Google Gemini AI'],
  live: 'https://fitness-gs.vercel.app/',
  source: 'https://github.com/Nikita-Saxena391/Fitness_Tracker',
  features: [
    'Set and manage daily fitness goals',
    'Track food intake and calories consumed',
    'Log fitness activities and calories burned',
    'User authentication with Sign Up and Sign In',
    'Update and manage user profile data',
    'Upload food images for AI-based calorie analysis',
    'Automatic food recognition using Google Gemini AI',
    'Deployed online using Strapi Cloud and Vercel'
  ],
  details: {
    problem:
      'Many people struggle to consistently track their daily food intake and fitness activities. Manual calorie calculation can be tedious and inaccurate.',
      
    solution:
      'This AI-powered fitness tracker simplifies health monitoring by allowing users to log workouts, track calories, and analyze food images using Google Gemini AI to automatically estimate calorie intake.',

    challenges:
      'Integrating Google Gemini AI for food image analysis, managing real-time calorie tracking, implementing secure authentication, and connecting the React frontend with the Strapi backend API.',

    images: [
      fit1, fit2, fit3, fit4, fit5, fit6, fit7,
      fit8, fit9, fit10, fit11, fit12, fit13, fit14
    ]
  }
},
// {
//   title: 'Movie Recommendation System',
//   image: MRS,
//   description: 'A content-based movie recommendation system that uses natural language processing (NLP) and cosine similarity to suggest similar films based on user preferences.',
//   tags: ['Python', 'Streamlit', 'ML', 'NLP'],
//   live: 'https://movie-recommendation-system-e8pjs6dvu6pcx6ctfhd3hj.streamlit.app/',
//   source: 'https://github.com/Resham011/Movie-Recommendation-System',
//   details: {
//     problem: 'With thousands of movies available, viewers often find it difficult to discover films that align with their tastes and preferences.',
//     solution: 'I designed and developed a content-based recommendation engine using Python and NLP techniques. By processing a dataset of over 5000 movies, the system analyzes genres, keywords, taglines, and cast information to generate similarity scores using cosine similarity. Users receive dynamic, personalized movie recommendations in a clean Streamlit interface.',
//     challenges: 'One major challenge was engineering meaningful features from sparse and inconsistent text data. I combined relevant attributes like genres, keywords, and cast into a unified “tag” field, handled missing values, and optimized the similarity matrix to maintain performance. Streamlining the NLP pipeline and ensuring responsiveness in the Streamlit UI were also key technical hurdles.',
//     images: [MRS_1, MRS_2, MRS]
//   }
// },  
{
  title: 'Personal Portfolio Website',
  image: Portfolio,
  description: 'A responsive, visually polished portfolio website built with React and Tailwind CSS to showcase my projects, skills, and technical journey.',
  tags: ['React', 'Vite', 'Tailwind'],
  live: '',
  source: '',
  details: {
    problem: 'As a developer, having a strong personal brand is essential. I needed a platform to professionally present my work, skills, and background in a way that reflects my technical abilities.',
    solution: 'I developed a full-stack portfolio website using React with Vite for blazing-fast performance and Tailwind CSS for a sleek, responsive UI. The site features a dark/light theme toggle, smooth scroll animations, interactive project modals, and a working contact form. It’s optimized for both desktop and mobile viewing, giving visitors an intuitive and engaging experience.',
    challenges: 'Creating a dynamic yet performant design was a balancing act. I had to fine-tune animation timings, structure reusable components efficiently, and ensure cross-browser/device compatibility. Implementing the interactive project modal and theme persistence added an extra layer of complexity that was rewarding to solve.',
    images: [Portfolio, Portfolio_1, Portfolio_2, Portfolio_3]
  }
},
];

export const achievementsData = [
  {
    title: "Competitive Programming ",
    description:
      "Solved 900+ DSA problems across LeetCode, GeeksforGeeks, CodeChef, and Coding Ninjas, demonstrating strong problem-solving and algorithmic thinking.",
    icon: FaChartLine,
    link: "https://codolio.com/profile/zaGgcLqF", // optional: add your profile link
    image: Codolio,
  },
  
  //  {
  //    title: "Finalist — Shaastra Programming Contest 2026",
  //    description:
  //      "Finalist at Shaastra Programming Contest 2026, IIT Madras. Selected among top contestants nationwide in a highly competitive algorithmic programming event.",
  //    icon: FaTrophy,
  //    link: "https://shaastra.org/",
  //    image: HackIndia, // reuse if you don’t have Shaastra image
  //  },
  {
  title: "Certificate of Excellence — Spring Boot",
  description:
    "Awarded by Coding Ninjas for demonstrating excellence in Spring Boot development, including REST APIs, backend architecture, and database integration.",
  icon: FaCertificate,
  link: "https://certificate.codingninjas.com/verify/4c6355bef8f51bb1",
  image: SpringBoot, // replace with Spring Boot certificate image
},
{
  title: "Certificate of Excellence — Frontend Development",
  description:
    "Recognized by Coding Ninjas for outstanding performance in Frontend Development, covering responsive UI design and modern web technologies.",
  icon: FaCertificate,
  link: "https://certificate.codingninjas.com/verify/f19343e3d356bd25",
  image: frontend, // replace with Frontend certificate image
},
{
    title: "Advanced Data Structures & Algorithms (Java) – Training & Internship, IIT Madras",
    description:
      "Completed intensive training under Coding Ninjas / IITM Pravartak, building strong foundations in algorithmic problem-solving using Java.",
    icon: FaUserGraduate, // education/training icon
    link: "https://drive.google.com/file/d/1ZO1SThGHtUvCbMik7TP1H226a9_HtBCq/view", // replace with actual link if available
    image: internship,
  },

  {
    title: "Elite Certificate in Big Data — NPTEL (IIT Kanpur)",
    description:
      "Earned the Elite Certificate in Big Data from NPTEL, IIT Kanpur, showcasing strong foundations in large-scale data processing and analytics.",
    icon: FaCertificate,
    link: "https://drive.google.com/file/d/1NughUNzCc0LGj5iy2K8PGPVHdqmPmiFg/view",
    image: NPTEL, // replace with NPTEL certificate image if available
  },
  {
  title: "Qualified for Finals — Shaastra Programming Contest 2026",
  description:
    "Qualified for the finals of the Shaastra Programming Contest 2026 at IIT Madras after successfully clearing the preliminary programming rounds.",
  icon: FaTrophy,
  link: "https://drive.google.com/file/d/1nTyMcLcRmbpA3DWOAo8e3dT63JlREXyS/view?usp=sharing",
  proof: "https://drive.google.com/file/d/1YTqKpkKvkUiT-CHnnJpei_ZmVCeicweP/view?usp=sharing",
  image: Shaastra
},
{
  title: "Selected Participant — SHEFi Program",
  description:
    "Selected for the SHEFi program, gaining exposure to technical skill development, collaborative learning, and professional growth through mentorship and structured training sessions.",
  icon: FaUserGraduate,
  link: "https://www.linkedin.com/feed/update/urn:li:activity:7431237932763607040/?originTrackingId=M%2BSLv3TrxC0z%2F%2BK854g3xg%3D%3D",
  image: Shefi
}
];
export const experienceData = [
{
    date: 'Jan 2026 - Present',
    title: 'Web Development Intern',
    company: 'Quantum Dot India',
    description: 'Working as a Web Development Intern developing responsive web applications and improving frontend user experience using modern web technologies.',
    isCurrent: true,
    icon: FaBriefcase,
    details: [
        "Developing responsive web interfaces using HTML, CSS, JavaScript, and modern frontend technologies.",
        "Collaborating with developers to build and enhance web application features.",
        "Improving UI responsiveness and optimizing performance across devices.",
        "Gaining real-world experience working on live development projects."
    ]
},
{
    date: 'Jan 2025 - Feb 2025',
    title: 'Web Development Intern',
    company: 'Plasmid',
    description: 'Worked as a Web Development Intern developing interactive web applications and improving frontend functionality.',
    isCurrent: false,
    icon: FaBriefcase,
    details: [
        "Built a responsive Calculator using HTML, CSS, and JavaScript.",
        "Developed an interactive To-Do application.",
        "Improved UI responsiveness and usability across different devices.",
        "Strengthened practical frontend development and debugging skills."
    ]
}
];