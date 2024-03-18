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
        <div className="flex flex-col items-center justify-center md:flex-row h-full">
            <div className="max-w-screen-sm max-h-screen-sm p-4">
                <div className="bg-blue2 rounded-xl w-full h-full flex flex-col items-center p-2 text-white1">
                    <div className="flex justify-center w-9/12 h-9/12 md:w-1/2 md:h-1/2">
                        <img src={image} alt="Photo" className="rounded-full w-5/6 hover:scale-150 transition duration-300 ease-in-out"/>
                    </div>
                    <div className="m-2 w-full h-full flex flex-col gap-y-2">
                        <h2>Hello, I'm</h2>
                        <h1 className="text-red-400">
                            <TypingAnimation text={Profile.Name}/> 
                        </h1>                  
                        <h3>{Profile.Position}</h3>
                        <body className="text-xs text-justify">{Profile.Bio}</body>
                        <div className="w-full flex justify-center">
                            <button 
                                className="bg-red-400 w-full md:w-1/4 h-14 rounded-lg hover:bg-blue-400 hover:transform hover:scale-125 duration-300 ease-in-out"
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