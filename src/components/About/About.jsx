import React from 'react';
import './about.css';
import infos from './index.js';
import Card from '../../utils/Card/Card.jsx';

const About = () => {
  return (
    <div className='about-container'>
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
    </div>
  )
}

export default About