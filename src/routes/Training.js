import React from 'react';
import NavBar from "../components/NavBar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import TrainingSection from "../components/Training";



const Training =()=>{
    return(
        <div>
            <NavBar/>
            <HeroImage heading='TRAINING' text='Choose your training rate.'/>
            <TrainingSection/>
            <Footer/>

        </div>
    )
}
export default Training