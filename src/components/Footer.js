import React from 'react';
import './FooterStyles.css';
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTelegram} from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                        <div>
                            <p>34/1 Kurchatova St.</p>
                            <h4>Grodno, Belarus</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>+375(29)-585-14-11</h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>coolviktori@yandex.by</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p> Hello, I am a person who has a strong passion for programming.
                        I have experience in creating SPA with React/Redux/TypeScript.
                        Now I am improving my skills in this direction and expanding them with new technologies.
                        I'm planning to study Node.js, because my next focus is to become a Full-Stack Developer. And also I have interest to design.
                        My free time is dedicated to Codewars, learning new technologies, and improved my English language skills.
                        Open for your suggestions.

                    </p>
                    <div className="social">
                        <FaLinkedin  size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                        <FaFacebook  size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                        <FaTelegram  size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Footer