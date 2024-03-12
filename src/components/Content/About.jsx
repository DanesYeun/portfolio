import React from "react";
import image from '../../assets/images/pic1.jpg';
import TypingAnimation from "../../assets/Animation/TypingAnimation";


const About = () => {

    const handleClick = async () => {
        const url = "/assets/files/Yaun Resume.pdf";
        const response = await fetch(url);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([arrayBuffer]));
        link.download = 'Yaun Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div className="flex flex-col md:flex-row h-full">
            <div className="w-full h-full">
                <img src={image} alt="photo" className="object-contain w-full h-auto rounded-2xl hover:transform hover:scale-95 transition duration-300 ease-in-out"/>
            </div>
            <div className="w-full h-full p-4">
                <div className="bg-blue2 rounded-xl w-full h-full flex items-center p-2 text-white1">
                    <div className="w-full">
                        <h2>Hello, I'm</h2>
                        <h1 className="text-red-400 mb-4">
                            <TypingAnimation text={'Engr. Clifford Danes Yaun'}/> 
                        </h1>                  
                        <h3 className="mb-4">Computer Engineer / Jr. Software Developer</h3>
                        <body className="text-xs mb-4">Hey there! 🚀 Computer engineering grad turned DevOps Developer at CoreDev Solutions Inc. 🛠️ Passionate about MySQL, React, .NET, embedded systems, and electronics 💻 Let's craft the future together!</body>
                        <div className="w-full flex justify-center">
                            <button 
                                className="bg-red-400 w-1/4 h-14 rounded-lg hover:bg-blue-400 hover:transform hover:scale-125 duration-300 ease-in-out"
                                onClick={handleClick}
                            >
                                About Me
                            </button>
                        </div>
                        
                    </div>  
                </div>
            </div>
        </div>

    );
}

export default About;