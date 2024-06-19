import React from 'react';
import './contact.css';
import download from '../../assets/download.png';

const Contact = () => {
  return (
    <div className='contact-container' id='math'>
        <h1 className='contact-header'>Ready to get started?</h1>
        <img className='contact-img' src={download} alt="contact" />
        <p className='copyright'>Copyright© 2024 Creta Class</p>
    </div>
  )
}

export default Contact