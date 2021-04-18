import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
    const noNamed = [
        {name: "About" , link: "/emergency"},
        {name: "Project" , link: "/checkup"},
        {name: "Our Teams" , link: "/personal-treatment"},
        
    ]
    const ourAddress = [
        {name: "Dhanmondi,Dhaka- Road 4/A" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    
    const services = [
        {name: "Fitness Guru" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Training for Personal Fitness" , link: "/personal-treatment"},
        {name: "Indoor Cycling" , link: "/tooth-extract"},
        {name: "Swimming" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both bg-dark mb-0">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-warning">Call now</h6>
                            <button className="btn btn-warning text-dark">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;