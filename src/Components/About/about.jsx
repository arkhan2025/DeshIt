import React from 'react';
import { Icon } from '@iconify/react';
import './about.css';

const About = () => {
  return (
    <section id="about">
            <div className='b'>
        <div className="all">
            <div className="ins">
                <div className="ico">
                <Icon icon="uil:calender"/>
                </div>
                <div className="amount">9+</div>
                <div className="des"><b>Years of Experience</b></div>
            </div>
            <div className="ins">
                <div className="ico">
                <Icon icon="streamline-sharp:laptop-project-screen-solid"/>
                </div>
                <div className="amount">40+</div>
                <div className="des"><b>Project Completed</b></div>
            </div>
            <div className="ins">
                <div className="ico">
                <Icon icon="fa:smile-o"/>
                </div>
                <div className="amount">300+</div>
                <div className="des"><b>Satisfied Client</b></div>
            </div>
            <div className="ins">
                <div className="ico">
                <Icon icon="tabler:award"/>
                </div>
                <div className="amount">18+</div>
                <div className="des"><b>Award Winner</b></div>
            </div>
        </div>      
    </div>
    </section>
    
  );
}

export default About;
