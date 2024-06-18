import React from 'react';
import './logo.css';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className='logo-container'>
        <img className='logo-img' src={logo} alt="Logo"/>
    </div>
  )
}

export default Logo