import React from 'react';
import './VideoStyles.css';
import {Link} from 'react-router-dom';
// import mainVideo from "../assets/chip.mp4";
import mainVideo from "../assets/Dvizh.mp4";

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={mainVideo} type='video/mp4'/>
            </video>
            <div className="content">
                <h1>Galaxy</h1>
                <p>Hello World!</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>Launch</Link>
                </div>
            </div>
        </div>
    )
}
export default Video