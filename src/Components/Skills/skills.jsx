import React from 'react'
import './skills.css'
import Arrow from '../../assets/arrow.png'
import Sk from '../../assets/sk.png'
import flutter from '../../assets/flutter.png'
import mysql from '../../assets/mysql.png'
import java from '../../assets/java.png'
import Rectangle from '../../assets/Rectangle.png'
import aws from '../../assets/aws.png'
import digitalocean from '../../assets/digitalocean.png'
import python from '../../assets/python.png'
import figma from '../../assets/figma.png'
import php from '../../assets/PHP.png'
import i from '../../assets/i.png'

const skills = () => {
  return (
    <div id='skill' className='container'>
        <div className="hd">
            <img src={Arrow} alt='arrow'/>
            <h1>My Skills</h1>
        </div>
        <div className="skills">
            <div className="one">
                <img src={flutter} alt='flutter'/>
                <img src={mysql} alt='mysql'/>
                <img src={java} alt='java'/>
                <img src={Rectangle} alt='Rectangle'/>
                <img src={aws} alt='aws'/>
                <img src={digitalocean} alt='digitalocean'/>
                <img src={python} alt='python'/>
                <img src={figma} alt='figma'/>
                <img src={i} alt='i'/>
                <img src={php} alt='php'/>
            </div>
            <div className="two">
                <img src={Sk} alt='sk'/>
            </div>
        </div>
    </div>
  )
}

export default skills