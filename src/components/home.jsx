import React from "react";
import pic1 from '../assets/images/pic1.jpg';
import '../assets/styles/Global.css'

function Home(){

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
        <div id="Home" className="p-5">
            <div className="border-b p-5 flex justify-around">
                <div className="w-2/4 ">
                    <img src={pic1} alt="Image"/>
                </div>
                <div className="text-white1 bg-blue1 w-4/6 rounded-xl px-5 py-10">
                    <h1>Hello, I'm</h1>
                    <h1 className="text-red-400 mb-4">Clifford Danes M. Yaun</h1>
                    <h2 className="mb-2">Computer Engineer</h2>
                    <body className="mb-4">As a dynamic computer engineer, I bring creativity and expertise to software development, crafting solutions that push boundaries and captivate users. Let's build something extraordinary together!</body>
                    <button className="bg-blue-500 hover:text-red-400 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-4" onClick={handleClick}>
                        <h2>Hire Me</h2>
                    </button>        
                </div>
            </div>
        </div>
    );
}

export default Home;