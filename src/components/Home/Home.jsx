import React from 'react';
import './home.css';
import child from '../../assets/child.png';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-left'>
                <h1 className='home-header'>Making Kids Fall in Love with Maths!</h1>
                <p className='home-p1'>BOOK YOUR FREE CLASS WITH AGE GROUP</p>
                <div className='home-btns'>
                    <button className='home-btn'>age-3</button>
                    <button className='home-btn'>age-4</button>
                    <button className='home-btn'>age-5</button>
                    <button className='home-btn'>age-6</button>
                    <button className='home-btn'>age-7</button>
                    <button className='home-btn'>age-8</button>
                </div>
                <button className='home-submit-btn'>BOOK A FREE LIVE CLASS</button>
                <p className='home-p2'>₹0 for first class 100% Off</p>
                <p className='home-p3'>Booked a demo already? <span className='home-span'>JOIN NOW</span></p>
            </div>
            <div className='home-right'>
                <img className='home-img' src={child} alt="image" />
            </div>
        </div>
    )
}

export default Home