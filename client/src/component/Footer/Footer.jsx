import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                <div className="title" style={{ color: 'black' }}>About</div>
                    <div className="text">
                    JAWAHAR LAL PRAJAPATI NUTRITION EXPERT OUR WORK IS DONE SATISFACTORILY. WE BELIEVE IN PROVIDING THE BEST SERVICE..
                    </div>
                </div>
                <div className="col">
                    <div className="title"style={{ color: 'black' }}>Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                           Jawahar Lal Prajapati Nutrition Expert Surat,324005
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Cell-Phone: +919825554062</div>
                        
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email:fitnesswithjawahar0744@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title" style={{ color: 'black' }}>Sweets</div>
                    <span className="text">NUTRITION</span>
                    <span className="text">FOOD</span>
                    <span className="text">WEIGHT-LOOSE</span>
                    <span className="text">GLOWING-SKIN</span>
                    <span className="text">HEALTH BENEFIT</span>
                    
                </div>
                <div className="col">
                    <div className="title" style={{ color: 'black' }}>Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        JAWAHAR LAL PRAJAPATI NUTRITION EXPERT <a href="https://www.instagram.com/irayhul" target="_blank" rel="noopener noreferrer">RAHUL WEB-DEVELOPER</a> 
                    
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;