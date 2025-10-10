import React from "react";
import "./project.css";
import Arrow from '../../assets/arrow.png'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'
import p6 from '../../assets/p6.png'
import p7 from '../../assets/p7.png'
import p8 from '../../assets/p8.png'

const Project = () => {
  return (
    <section id="project" className="projects-section">
      <div className="hea">
        <div className="hd">
                  <img src={Arrow} alt='arrow'/>
                  <h1>My Recent Projects</h1>
        </div>
        <p>
           want to become a skilled full stack developer, proficient in both frontend and backend technologies. My goal is to build visually appealing and high-performing web applications.
           </p> 
      </div>      
      <div className="projects-container">
        <div className="cards">
          <div className="ima">
            <img src={p1} alt=""/>
          </div>
          <div className="det">
            <h4>SCIBAI, Diag. & SNS for veggie</h4>
            <p>An integrated app that uses AI to instantly solve vegetable health problems by diagnosing over 140 issues. Features a social platform (SNS) for expert gardening advice and user collaboration.</p>
            <button><span className="col">Click to Visit →</span></button>
          </div>
        </div>
        <div className="cards">
          <div className="ima">
            <img src={p2} alt=""/>
          </div>
          <div className="det">
            <h4>Transcom Digital</h4>
            <p>A mobile platform for Transcom Digital, focusing on delivering the brand's priority of value for money and genuine products.</p>
            <button><span className="col">Click to Visit →</span></button>
          </div>
        </div>
        <div className="cards">
          <div className="ima">
            <img src={p3} alt=""/>
          </div>
          <div className="det">
            <h4>Job Circular</h4>
            <p>This app is about all types of job circular, application forms, exam schedule, exam results, any other information about examination and job exam preparation.</p>
            <button><span className="col">Click to Visit →</span></button>
          </div>
        </div>
        <div className="cards">
          <div className="ima">
            <img src={p4} alt=""/>
          </div>
          <div className="det">
            <h4>Cinebaz</h4>
            <p>Cinebaz is an entertainment app where can watch movies, web series and big budget films.</p>
            <button><span className="col">Click to Visit →</span></button>
          </div>
        </div>
        <div className="cards">
          <div className="ima">
            <img src={p5} alt=""/>
          </div>
          <div className="det">
            <h4>SBI General Secure</h4>
            <p>The app provides information about General insurance performance with a facility to drill down till the branch level.</p>
            <button><span className="col">Click to Visit →</span></button>
          </div>
        </div>
        <div className="cards">
          <div className="ima">
            <img src={p6} alt=""/>
          </div>
          <div className="det">
            <h4>কুরআন শিক্ষা (Quran Learning)</h4>
            <p>এই অ্যাপে ৫ ধাপে কুরআন শেখার জন্য ন্যূনতম যতটুকু জানা প্রয়োজন, তা সহজ সরল ভাষায় মূল কুরআন থেকে উদাহরণসহ আলোচনা করা হয়েছে</p>
            <button><span className="col">Click to Visit →</span></button>
          </div>
        </div>
        <div className="cards">
          <div className="ima">
            <img src={p7} alt=""/>
          </div>
          <div className="det">
            <h4>Swoop News</h4>
            <p>If you want to stay in the know, Swoop News is perfect for you. We'll keep you up-to-date with the most significant business, economic, political and cultural developments.</p>
            <button><span className="col">Click to Visit →</span></button>
          </div>
        </div>
        <div className="cards">
          <div className="ima">
            <img src={p8} alt=""/>
          </div>
          <div className="det">
            <h4>Swoop News</h4>
            <p>The Shoply is a micro-merchant e-commerce app. The goal is to bring all small shops around the country in one platform.</p>
            <button><span className="col">Click to Visit →</span></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
