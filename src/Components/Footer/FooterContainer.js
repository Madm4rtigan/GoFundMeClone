import React from 'react'
import './Footer.css';


function FooterContainer(props) {
    return (
        <div className ='footer-container flex flex-col justify-center w-full'>
            <div className="flex mt-8 w-full justify-center">HelpFundMe &copy; 2020</div>
            <div className="flex flex-col ml-12 font-semibold pb-8">
                <p className="pb-2">Helpful Links</p>
                <a className="font-normal" href="https://www.gofundme.com/">GoFundMe.com</a>
                <a className="font-normal" href="https://gallery.cortanaintelligence.com/Experiment/PredictiveCalc">Our Predictive Azure Project</a>
                <a className="font-normal" href="https://gallery.cortanaintelligence.com/Experiment/InText-Analytics">Our Text-Analytics Azure Project</a>
            </div>
        </div>
        
    )
}

export default FooterContainer