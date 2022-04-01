import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HeroImage from "../components/HeroImage";



const Contact =()=>{
    return(
        <div>
            <NavBar/>
            <HeroImage heading='CONTACT' text='Contact with me'/>
            <Form/>
            <Footer/>
        </div>
    )
}
export default Contact