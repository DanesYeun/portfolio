import React from "react";
import TypingAnimation from "../../assets/Animation/TypingAnimation";
import { SiArduino, SiCplusplus, SiCsharp, SiCss3, SiDotnet,SiHtml5,SiJavascript, SiMysql, SiPostgresql, SiReact, SiLaravel  } from "react-icons/si";
import { FcCircuit, FcLinux,FcElectronics } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa";

const Skill = () => {

    const Contents = {
        CatchLine: 'Envision your projects transformed with my expertise spanning React, HTML, CSS, C++, Arduino, C#, .NET, MySQL, PostgreSQL, embedded systems, and Linux. I bring a dynamic fusion of technical proficiency and creative innovation, guaranteeing unparalleled results that dazzle and inspire. Let\'s embark on a journey of innovation and success together.'
    };

    return(
        <div>
            <h1 className="uppercase flex justify-center text-red-400">
                <TypingAnimation text={'work with me!'}/>
            </h1>
            <div className="md:m-2">
                <h4 className="text-justify bg-blue1 p-2 rounded-2xl h-fit md:h-full text-white1">{Contents.CatchLine}</h4>
            </div>

            <h1 className="text-blue2 uppercase flex justify-center">my skills</h1>

            <div className="h-full grid grid-cols-2 md:grid-cols-7 place-items-center gap-y-4">
                <SiArduino size={50} style={{color: '#00979C'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiCplusplus size={50} style={{color: '#044F88'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <FcCircuit size={50}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <FcElectronics size={50}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <FcLinux size={50}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <FaGitAlt size={50} style={{color: '#F1502F'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiHtml5 size={50} style={{color: '#f06529'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiCss3 size={50} style={{color: '#264de4'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiJavascript size={50} style={{color: '#f0db4f'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiReact size={50} style={{color: '#61dafb'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiCsharp size={50} style={{color: '#280068'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiDotnet size={50} style={{color: '#09a3ab'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiMysql size={50} style={{color: '#09a3ab'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiPostgresql size={50} style={{color: '#336791'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
                <SiLaravel size={50} style={{color: 'F05340'}}
                    className="hover:scale-150 transition duration-200 ease-in-out"/>
            </div>
        </div>
    );
}

export default Skill;