import React from 'react';
import './Team.css';

import Guide from '../assets/Guide.png';
import Student1 from '../assets/Student1.jpg';
import Student2 from '../assets/Student2.jpeg';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'; 

const Team = () => {
  const teamMembers = [
    {
      name: "Kiranraj M",
      role: "NNM23MC067",
      designation: "Backend Developer",
      college: "Dept of MCA -NMAMIT, Nitte",
      image: Student1,
      linkedin: "https://www.linkedin.com/in/kiran-r-m-8013281b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/kiranRnambiar",
      instagram: "https://www.instagram.com/kira___666_/profilecard/?igsh=dnAwcHQ3bzZ5ZmN4"
    },
    {
      name: "Mr. Ananth Murthy",
      role: "Project Guide",
      designation: "Assistant Professor - Gd III",
      college: "Dept of MCA - NMAMIT, Nitte",
      image: Guide,
      instagram: "https://www.instagram.com/infinitestatue/profilecard/?igsh=M2pzdjJxNWlyNG5k",
      featured: true
    },
    {
      name: "Manish",
      role: "NNM23MC073",
      designation: "Frontend Developer",
      college: "Dept of MCA -NMAMIT, Nitte",
      image: Student2,
      linkedin: "https://www.linkedin.com/in/manish-3b6142207/",
      github: "https://github.com/ManishShettigar253",
      instagram: "https://www.instagram.com/manish__shettigar/profilecard/?igsh=aGlwemQwdzc2N3g2",
      youtube: "https://www.youtube.com/@wanderlustEngineer253"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="team-container">
        <h2 className="team-title">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className={`team-member ${member.featured ? 'featured' : ''}`} key={index}>
              <div className="hexagon-bg"></div>
              <div className="hexagon-content">
                <div className="member-image-container">
                  <img className="member-image" src={member.image} alt={member.name} />
                </div>
                <p className="member-name">{member.name}</p>
                <p className="member-role">{member.role}</p>
                <p className="member-designation">{member.designation}</p>
                <p className="member-college">{member.college}</p>

                <div className="social-links">
                  {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
                  {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                  {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                  {member.youtube && <a href={member.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
