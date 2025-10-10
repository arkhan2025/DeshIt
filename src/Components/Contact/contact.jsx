import React, { useState } from "react";
import "./contact.css";
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields!");
      return;
    }

    
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", Phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h3>LET'S CONNECT</h3>
      {submitted && <p className="success-msg">Message sent successfully!</p>}
      <div className="main">
        <div className="for">
        <form className="contact-form" onSubmit={handleSubmit}>        
        <label>          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </label>
        <label>    
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Phone"
          />
        </label>
        <label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Please type your message here..."
            rows="5"
          />
        </label>
        <button type="submit">Send Message</button>
        </form>
        </div> 
        <div className="describe">
          <h4>Contact Us</h4>
          <p><span className="un">
            Are you looking for a dedicated Full Stack Developer to bring
             your vision to life? I specialize in delivering end-to-end 
             solutions, from robust back-end architecture to engaging user
              interfaces. Let's discuss how I can leverage my expertise 
              to help you build your next great application.
          </span>
          
            </p>
            <div className="un2"></div>
            <p className="connection">
            <img src={mail} alt=""/>
            <span className="p5">CONTACT@COMPANY.COM</span>
            </p>
            <p className="connection">
            <img src={phone} alt=""/>
            <span className="p6">(123)456-789</span>
            </p>
            <p className="connection1">
            <img src={location} alt=""/>
            <p className="p4"><b>794 MCALLISTER ST, ROAD-1256,
            SAN FRANCISGO,84102</b></p>
            </p>
          </div>
        </div>     
    </section>
  );
};

export default Contact;
