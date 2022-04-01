import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PricingCards from "../components/Pricing";
import HeroImage from "../components/HeroImage";



const Pricing =()=>{
    return(
        <div>
            <NavBar/>
            <HeroImage heading='PRICING' text='Choose your rate.'/>
            <PricingCards/>
            <Footer/>
        </div>
    )
}
export default Pricing