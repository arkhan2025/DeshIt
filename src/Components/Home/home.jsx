import React from "react";
import "./home.css";
import arrow from '../../assets/Arrow right.png'
import Me from '../../assets/me.png'
import Clients from '../../assets/clients.png'
import Projects from '../../assets/projects.png'
import WhatsApp from '../../assets/whatsapp.png'
import LinkedIn from '../../assets/linkedin.png'
import Facebook from '../../assets/f.png'


const Combined = () => {
  return (
    <section id="home" className="combined-section">
      <div className="combined-container">
        <div className="text-container">
          <div className="home-info">
            <div className="nm">
              <h1><b>I AM <span className="red">ARAFAT</span> HOSSAIN SOBUJ</b></h1>
            </div>
            <div className="box">
              <div className="para">
                <b>Full-Stack Mobile App Developer | 9+ Years Experience<br/>
                Expert in Flutter & Node.js | 40+ Successful Projects Delivered</b>
              </div>
            </div>
            <div className="deco">
              <h3>
                Maximize Your Business
                <span className="red"> Potential</span> with Custom Web 
                Development <span className="blue"> Solutions!</span>
              </h3>
            </div>
            <div className="para2">
              Take your business to the next level with<br/> custom web development solutions.
            </div>
            <div className="btn">
              <button>
                Get In Touch
                <img src={arrow} alt="arrow"/>
              </button>
              <button className="cv">
                <a
                  href="/Md Ashfaqur Rahman Khan.pdf"
                  download
                  className="my-button"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={Me} alt="me"/>
          <img src={Clients} alt="clients"/>
          <img src={Projects} alt="projects"/>
          <img src={LinkedIn} alt="linkedin"/>
          <img src={WhatsApp} alt="whatsapp"/>
          <img src={Facebook} alt="facebook"/>
        </div>
      </div>
    </section>
  );
};

export default Combined;
