import React from 'react'
import "./services.css";
import Arrow from '../../assets/arrow.png'
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s4 from '../../assets/s3.png'
import s3 from '../../assets/s4.png'
import s5 from '../../assets/s5.png'
import s6 from '../../assets/s6.png'

const skills = () => {
  return (
    <section id='services' className='skill'>
      <div className="first">
        <div className="hd1">
          <img src={Arrow} alt='arrow'/>
          <h1>My Services</h1>
        </div>
        <p>
          I am a highly experienced Full-Stack Mobile App Developer with over seven years in the industry. I specialize in Flutter for mobile development and Node.js for backend solutions. With a deep understanding of scalable architectures, I have successfully delivered 40+ high-performance applications across various industries, ensuring seamless user experiences and efficient backend systems.
        </p>
      </div>
      <div className="second">
        <div className="card">
          <img src={s1} alt='data'/>
          <h5>Web Application</h5>
          <p>I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...</p>
          <button>
            Learn More →
          </button>
        </div>
        <div className="card">
          <img src={s2} alt='data'/>
          <h5>Web Development</h5>
          <p>I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...</p>
          <button>
            Learn More →
          </button>
        </div>
        <div className="card">
          <img src={s3} alt='data'/>
          <h5>App Development</h5>
          <p>I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...</p>
          <button>
            Learn More →
          </button>
        </div>
        <div className="card">
          <img src={s4} alt='data'/>
          <h5>Databasse Management</h5>
          <p>I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...</p>
          <button>
            Learn More →
          </button>
        </div>
        <div className="card">
          <img src={s5} alt='data'/>
          <h5>Data Analysis</h5>
          <p>I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...</p>
          <button>
            Learn More →
          </button>
        </div>
        <div className="card">
          <img src={s6} alt='data'/>
          <h5>Web Design</h5>
          <p>I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...</p>
          <button>
            Learn More →
          </button>
        </div>
      </div>
      
    </section>
  )
}

export default skills