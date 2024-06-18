import React from 'react';
import './home.css';
import child from '../../assets/child.png';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-left'>
                <h1 className='home header'>Making Kids Fall in Love <br />with Maths!</h1>
                <p className='home-p1'>BOOK YOUR FREE CLASS WITH AGE GROUP</p>
                <div className='home-btns'>
                    <button>age-3</button>
                    <button>age-4</button>
                    <button>age-5</button>
                    <button>age-6</button>
                    <button>age-7</button>
                    <button>age-8</button>
                </div>
                <button className='home-submit-btn'>BOOK A FREE LIVE CLASS</button>
                <p className='home-p2'>₹0 for first class 100% Off</p>
                <p className='home-p3'>Booked a demo already?<span className='home-span'>JOIN NOW</span></p>
                <div className='home-right'>
                    <img className='home-img' src={child} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Home