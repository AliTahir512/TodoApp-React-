import React from "react";
import "./About.css";
import ProfileImage from "../assets/MyProfile.jpeg";

function About() {
  return (
    <div className="about-container">
      <div className="about-info">

        <h1>About Me</h1>
        <p>
        Hello! My name is <b>Ali Tahir</b>, and I'm a passionate Software Engineer with a strong foundation in React and frontend development. I also have experience in Mobile App development with Flutter.
        I recently graduated with a degree in Software Engineering from National University of Sciences and Technology <b>(NUST)</b>, where I honed my skills in HTML, CSS, JavaScript, and various web development frameworks.
      </p>
<br />
      <p>
        Over the past few years, I've worked on numerous projects that have allowed me to refine my technical abilities and develop 
        a keen eye for design. I enjoy creating dynamic and responsive web applications that provide seamless user experiences. 
        Whether I'm working on a complex application or a simple website, I strive to write clean, efficient, and maintainable code.
      </p>

      <br />

      <p>
        When I'm not coding, you can find me exploring the latest tech trends, working on personal projects, or contributing to open-source 
        communities. I believe in continuous learning and am always looking for new challenges to improve my skills and knowledge.
      </p>
      </div>




      <img src={ProfileImage} alt="Profile" className="profile_image" />
    </div>
  );
}

export default About;
