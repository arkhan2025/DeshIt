import React from 'react'
import './portfolio.css'
import i from '../../assets/im.png'
import p from '../../assets/p.png'

const portfolio = () => {
  return (
    <div id='portfolio' className="extra">
        <div className="i">
          <img src={i} alt='i'/>
        </div>
        <div className="d">
          <h1>
            <img src={p} alt='p'/>
            <span className='red'>ARAFAT</span>  HOSSAIN SOBUJ
          </h1>
          <h2>
            A Full Stack Web Developer
          </h2>
          <p>
            As a Full Stack Web Developer, I am responsible for designing and building complete web applications from start to finish. This includes creating user interfaces, writing server-side code, and managing databases. With my comprehensive knowledge of the entire web development process, I can efficiently turn ideas into fully functional websites or applications.
          </p>
          <button className='co'>
            Contact Me →
          </button>
        </div>
      </div>
  )
}

export default portfolio