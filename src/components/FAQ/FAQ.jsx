import React, { useState } from 'react';
import './faq.css';


const FAQ = () => {
    const [isHidden1, setIsHidden1] = useState(true);
    const [isHidden2, setIsHidden2] = useState(true);
    const [isHidden3, setIsHidden3] = useState(true);
    const [isHidden4, setIsHidden4] = useState(true);

   
    return (
        <div className='faq-container'>
            <h1 className='faq-header'>FAQs</h1>
            <p className='faq-p1'>Our expert advisors can help you find the right workplace solution for you and your team</p>

            <div className='faq'>
                <div className='faq-question-container'>
                    <h1 className='faq-question'>Where can I purchase courses?</h1>
                    <button className='faq-btn' onClick={()=>setIsHidden1(!isHidden1)}>{isHidden1 ? "⬇️" : "⬆️"}</button>
                </div>
                <div className='faq-answers' style={{ display: isHidden1 ? "none" : "flex" }}>
                    <p className='faq-points'>Here are three ways to purchase your courses:</p>
                    <p className='faq-points'>1. Click the "Try it now" button above to purchase your Trial Lessons;</p>
                    <p className='faq-points'>2. Purchase courses on the official website;</p>
                    <p className='faq-points'>3. Download the "Creta Class" app and purchase your desired courses in the app.</p>
                </div>
            </div>
            <div className='faq'>
                <div className='faq-question-container'>
                    <h1 className='faq-question'>Can I get a refund at any time?</h1>
                    <button className='faq-btn' onClick={()=>setIsHidden2(!isHidden2)}>{isHidden2 ? "⬇️" : "⬆️"}</button>
                </div>
                <div className='faq-answers' style={{ display: isHidden2 ? "none" : "flex" }}>
                    <p className='faq-points'>Sorry, But the course once purchased cannot be refunded.</p>
                </div>
            </div>
            <div className='faq'>
                <div className='faq-question-container'>
                    <h1 className='faq-question'>Where can I find my purchased courses?</h1>
                    <button className='faq-btn' onClick={()=>setIsHidden3(!isHidden3)}>{isHidden3 ? "⬇️" : "⬆️"}</button>
                </div>
                <div className='faq-answers' style={{ display: isHidden3 ? "none" : "flex" }}>
                    <p className='faq-points'>You can find your courses in "My Courses" Section.</p>
                </div>
            </div>
            <div className='faq'>
                <div className='faq-question-container'>
                    <h1 className='faq-question'>After a completed purchase, when will the course start?</h1>
                    <button className='faq-btn' onClick={()=>setIsHidden4(!isHidden4)}>{isHidden4 ? "⬇️" : "⬆️"}</button>
                </div>
                <div className='faq-answers' style={{ display: isHidden4 ? "none" : "flex" }}>
                    <p className='faq-points'>The courses are pre-recorded and can be started right away.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ