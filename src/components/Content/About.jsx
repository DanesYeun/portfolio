import React from "react";
import image from '../../assets/images/pic1.jpg';
import TypingAnimation from "../../assets/Animation/TypingAnimation";


const About = () => {

    const Profile = {
        Name: 'Clifford Danes M. Yaun',
        Position: 'Computer Engineer / Software Developer',
        Bio: 'Hey there! 🚀 Computer engineering grad turned DevOps Developer at CoreDev Solutions Inc. 🛠️ Passionate about MySQL, React, .NET, embedded systems, and electronics 💻 Let\'s craft the future together!'
    };

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
        <div className="h-full">
            <div className="w-2/5 m-auto place-items-center">
                <img src={image} alt="Photo" className="rounded-full"/>
            </div>
            <div className="text-white m-2">   
                <h2>Hello, I'm</h2>
                <h1 className="text-red-400">
                    <TypingAnimation text={Profile.Name}/> 
                </h1>
                <body className="text-xs text-justify">{Profile.Bio}</body>
                <div className="m-2 flex justify-center">
                    <button 
                        className="bg-red-400 w-full md:w-1/4 h-14 rounded-lg hover:transform hover:scale-125 duration-300 ease-in-out m-auto"
                        onClick={handleClick}
                    >
                        About Me
                    </button>
                </div>     
            </div>
        </div>
    );
}

export default About;