import { useState, useEffect } from "react";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import References from "./components/References";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  // Dark / Light Mode
  const [darkMode, setDarkMode] = useState(false);

  // Show / Hide Skills
  const [showSkills, setShowSkills] = useState(true);

  // Change browser tab title
  useEffect(() => {
    document.title = "Tebeleletso Ramokhele | Online CV";
  }, []);

  // Education information
  const education = [
    {
      qualification: "Diploma in Multimedia and Software Engineering",
      institution: "Limkokwing University of Creative Technology",
      year: "2024 - Present"
    },
    {
      qualification: "Senior Secondary Certificate",
      institution: "Your High School",
      year: "2020 - 2023"
    }
  ];

  // Skills
  const skills = [
    "React.js",
    "Java",
    "JavaScript",
    "HTML and CSS",
    "C++",
    "Database Management",
    "UI/UX Design"
  ];

  // Work experience
  const experiences = [
    {
      position: "Student Developer",
      organisation: "Academic Projects",
      description:
        "Developed web and software applications as part of academic coursework and practical projects.",
      responsibilities: [
        "Developed responsive web pages",
        "Worked with Java and JavaScript",
        "Designed and managed databases",
        "Tested and debugged applications"
      ]
    }
  ];

  // Projects
  const projects = [
    {
      name: "Online Water Bill Management System",
      description:
        "A database application designed to manage customers, water usage, billing and payments.",
      technologies: "HTML, CSS, JavaScript and SQL"
    },
    {
      name: "Hospital Appointment Booking System",
      description:
        "A system designed to help patients search for available appointments and manage their bookings.",
      technologies: "React, JavaScript, HTML and CSS"
    }
  ];

  // References
  const references = [
    {
      name: "Ms Mokhachane",
      position: "Lecturer",
      organisation: "Limkokwing University of Creative Technology",
      email: "Itumeleng6@gmail.com",
      phone: "+266 56676767"
    },
    {
      name: "Liteboho Molaoa",
      position: "Lecturer",
      organisation: "Limkokwing University of Creative Technology",
      email: "liteobho.molaoa@gmail.com",
      phone: "+266 56676767"
    }
  ];

  // Print CV
  const printCV = () => {
    window.print();
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>

      {/* Header */}
      <Header
        name="TEBELETSO RAMOKHELE"
        title="Software Developer | IT Student"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        printCV={printCV}
      />

      <main>

        {/* Professional Profile */}
        <Profile
          name="Tebeleletso Ramokhele"
          title="Software Developer | IT Student"
          summary="I am a motivated and hardworking IT student with an interest in software development, web development and database systems. I enjoy solving problems, learning new technologies and creating useful digital solutions."
        />

        {/* Contact Information */}
        <section id="contact" className="section contact">

          <h2>Contact Information</h2>

          <p>
            <strong>Email:</strong>{" "}
            your.email@gmail.com
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            +266 56676767
          </p>

          <p>
            <strong>Location:</strong>{" "}
            Maseru, Lesotho
          </p>

        </section>

        {/* Education */}
        <Education
          education={education}
        />

        {/* Skills */}
        <Skills
          skills={skills}
          showSkills={showSkills}
          setShowSkills={setShowSkills}
        />

        {/* Work Experience */}
        <Experience
          experiences={experiences}
        />

        {/* Projects */}
        <Projects
          projects={projects}
        />

        {/* References */}
        <References
          references={references}
        />

      </main>

      {/* Footer */}
      <Footer
        name="Tebeleletso Ramokhele"
        email="your.email@gmail.com"
        phone="+266 56676767"
      />

    </div>
  );
}

export default App;