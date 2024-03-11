import React from "react";
import pic2 from '../assets/images/pic2.jpg'
import { FaFacebook, FaLinkedinIn, FaMap } from "react-icons/fa";
import { MdAlternateEmail, MdMessage } from "react-icons/md";

function Contact(){

    return(
        <div id="Contact" className="px-20">
            <div className="p-5">
                <div className="flex justify-center mb-5">
                    <h1>Contact Card</h1>
                </div>
                <div className="rounded-xl grid grid-cols-2">
                    <div className="rounded-l-xl flex flex-col items-center">
                        <img src={pic2} className="rounded-xl"/>
                        <div className="">
                            <h1 className="text-red-400">Clifford Danes M. Yaun</h1>
                            <h2>Computer Engineer</h2>
                        </div>  
                    </div>
                    <div className="text-white1 rounded-r-xl grid bg-blue1 grid-cols-1 p-5">
                        <div className="border-b p-2">
                            <MdMessage size={50} color="white"/>
                            <body className="hover:text-red-400">09396594909</body>
                        </div>
                        <div className="border-b p-2">
                            <FaFacebook size={50} color="white" className="mb-2"/>
                            <a href="https://www.facebook.com" target="_blank">
                                <body className="hover:text-red-400">Danes Yaun</body>
                            </a>
                        </div>
                        <div className="border-b p-2">
                            <FaLinkedinIn size={50} className="mb-2"/>
                            <a href="https://www.linkedin.com/in/clifford-danes-yaun-6b0172250/" target="_blank">
                                <body className="hover:text-red-400">Clifford Danes Yaun</body>
                            </a>
                        </div>
                        <div className="border-b p-2">
                            <MdAlternateEmail size={50} color="white" className="mb-2"/>
                            <a href="mailto:123xd@yopmail.com" target="_blank">
                                <body className="hover:text-red-400">clifforddanesyaun@gmail.com</body>
                            </a>
                        </div>
                        <div className="p-2">
                            <FaMap size={50} color="white" className="mb-2"/>
                            <a href="https://www.google.com/maps/place/Avida+Towers+Davao/@7.0692392,125.6102087,17z/data=!4m6!3m5!1s0x32f96d9da2cc7341:0xce32cb924f0a6ad0!8m2!3d7.0700572!4d125.6113236!16s%2Fg%2F1pp2tvhh_?entry=ttu" target="_blank">
                                <body className="hover:text-red-400">CM Recto, Poblacion District, Davao City</body>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact; 