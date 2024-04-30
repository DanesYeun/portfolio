import React, { useState } from "react";
import image3 from '../../assets/images/pic3.jpg';
import TypingAnimation from '../../assets/Animation/TypingAnimation';
import { PiGithubLogoLight, PiLinkedinLogoLight } from "react-icons/pi";
import { TbMailShare, TbMessage2 } from "react-icons/tb";

const Contact = () => {

    const [cardOpen,setCardOpen] = useState(false);

    const handleCardClick = () => {
        setCardOpen(!cardOpen);
        console.log(cardOpen);
    }

    return(
        <div className="w-full h-full flex justify-center p-2 text-white">
            <div 
                className={`border border-black rounded-2xl flex ${cardOpen === true ? 'w-full md:w-3/4 border-green-400' : 'md:w-1/2'}`} >
                <div className={`h-full p-2 flex flex-col ${cardOpen === true ? 'w-full' : 'w-full'}`}>
                    <div className="flex-grow">
                        <img src={image3} 
                            alt="photo" 
                            className="rounded-2xl border hover:border-green-400 hover:border-2 hover:cursor-pointer" 
                            onClick={handleCardClick}
                        />
                    </div>
                    <div className="w-full h-1/5 flex items-center justify-evenly">
                        <h2>Clifford Danes Yaun</h2>
                    </div>
                    <div className="w-full h-1/5 flex flex-col">
                        <h4 className="flex justify-center">DevOps · Developer</h4>
                        <h5 
                            className="flex md:justify-center hover:text-red-400">
                            <a href="https://www.coredev.ph/" target="_blank>">
                            CoreDev Solutions Inc.
                            </a>
                        </h5>
                    </div>
                </div>
                <div className='border rounded-2xl bg-blue1 flex flex-col w-3/4 h-full text-white1 p-2 space-y-2' style={{ display: cardOpen ? 'block' : 'none' }}>
                    <div className="flex-grow">
                        <h1 className="flex justify-center"><TypingAnimation text={"Reach Out..."}/></h1>
                    </div>   
                        <a href="https://www.linkedin.com/in/clifford-danes-yaun-6b0172250/" 
                            target="_blank"
                            className="border flex items-center flex-grow hover:text-red-400 hover:transform hover:scale-95 transition duration-300 ease-in-out">
                            <PiLinkedinLogoLight size={50}/>
                            <h5>https://www.linkedin.com/in/clifford-danes-yaun-6b0172250/</h5>
                        </a>
                        <a href="https://github.com/DanesYeun"
                            target="_blank" 
                            className="border flex items-center flex-grow hover:text-red-400 hover:transform hover:scale-95 transition duration-300 ease-in-out">
                            <PiGithubLogoLight size={50}/>
                            <h5>https://github.com/DanesYeun</h5>
                        </a>
                        <a href="mailto:clifforddanesyaun@gmail.com"
                            className="border flex items-center flex-grow hover:text-red-400 hover:transform hover:scale-95 transition duration-300 ease-in-out">
                            <TbMailShare size={50} className="stroke-current stroke-1"/>
                            <h5>clifforddanesyaun@gmail.com</h5>
                        </a>
                        <a href="sms:+639396594909"
                            className="border flex items-center flex-grow hover:text-red-400 hover:transform hover:scale-95 transition duration-300 ease-in-out">
                            <TbMessage2 size={50} className="stroke-current stroke-1"/>
                            <h5>09396594909</h5>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;