import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h3 className="about-title">About</h3>

      <div className="about-section">
        <h4 className="section-title">Web Development</h4>
        <ul className="tech-list">
          <li>HTML</li>
           <li>CSS</li>
           <li>React</li>                   
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>             
          
        </ul>
      </div>

      <div className="about-section">
        <h4 className="section-title">State</h4>
        <ul className="tech-list">
        <li>Redux</li>
        <li>Redux-Saga</li>          
          
        </ul>
      </div>

      <div className="about-section">
        <h4 className="section-title">Development Environment</h4>
        <ul className="tech-list">
         <li>VS Code</li>
        </ul>
      </div>
      <div className="about-section">
        <h4 className="section-title">Deployment</h4>
        <ul className="tech-list">
         <li>Heroku</li>
        </ul>
      </div>
      <div className="about-section">
        <h4 className="section-title">Design Tool</h4>
        <ul className="tech-list">
         <li>Figma</li>
         <li>DB designer</li>
        </ul>
      </div>
      <div className="about-section">
        <h4 className="section-title">Database</h4>
        <ul className="tech-list">
         <li>PostgreSQL</li>
         
        </ul>
      </div>
      <div className="about-section">
        <h4 className="section-title">Tools</h4>
        <ul className="tech-list">
          <li>Postman</li>
          <li>Axios</li>
        </ul>
      </div>


      <div className="about-section">
        <h4 className="section-title">Authentication & Security</h4>
        <ul className="tech-list">
          <li>OAuth</li>
          <li>JWT (JSON Web Tokens)</li>
        </ul>
      </div>

      <div className="about-section">
        <h4 className="section-title">Version Control</h4>
        <ul className="tech-list">
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default About;


