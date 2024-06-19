import React from 'react';
import './about.css';
import infos from './index.js';
import Card from '../../utils/Card/Card.jsx';
import about2 from '../../assets/about2.png';

const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className='about-1'>
            <h1 className='about-header1'>Adaptive learning path + best teachers = Math mastery</h1>
            <p className='about-p1'>The guaranteed formula to be a Math wizard</p>
            <div className='about-cards'>
                {
                    infos.map((info) => {
                        return(
                            <Card 
                                title={info.title}
                                points={info.points}
                                img={info.img}
                                bgColor={info.bgColor}
                            />
                        )
                    })
                }
            </div>
        </div>
        <div className='about-2'>
            <h1 className='about-header1'>Cultivate thinking skills from all aspects</h1>
            <p className='about-p1'>Our expert advisors can help you find the right workplace solution for you and your team</p>
            <div className='about-levels'>
                <p className='about-p2-1'>S2 <br /> 3-4 Years Old</p>
                <p className='about-p2-2'>S3 <br /> 5 Years Old</p>
                <p className='about-p2-3'>S4 <br /> 6 Years Old</p>
            </div>
            <div className='about-2-img'>
                <img src={about2} alt="About" />
            </div>
        </div>
    </div>
  )
}

export default About