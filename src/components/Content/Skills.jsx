import React from "react";
import TypingAnimation from "../../assets/Animation/TypingAnimation";
import { SiArduino, SiCplusplus, SiCsharp, SiCss3, SiDotnet,SiHtml5,SiJavascript, SiMysql, SiPhp, SiPostgresql, SiReact  } from "react-icons/si";
import { FcCircuit, FcLinux,FcElectronics } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa";

const Skill = () => {

    return(
        <div className="flex h-full flex-row">
            <div className="border-r w-full h-full p-2">
                <h1 className="flex justify-center text-red-400"><TypingAnimation text={"Want to work with me?"}/></h1>
                <h4 className="border bg-blue1 w-full h-3/5 rounded-xl p-4 text-white1">
                    Envision your projects transformed with my expertise spanning React, HTML, CSS, C++, Arduino, C#, .NET, MySQL, PostgreSQL, embedded systems, and Linux. I bring a dynamic fusion of technical proficiency and creative innovation, guaranteeing unparalleled results that dazzle and inspire. Let's embark on a journey of innovation and success together.
                </h4>
            </div>
            <div className="w-full h-full p-2">
                <h1 className="text-blue1 flex justify-center"><TypingAnimation text={"My Skills"}/></h1>
                <div className="border rounded-lg grid grid-cols-5 w-full h-full p-4 bg-white1">
                    <SiReact size={50} color="skyblue"/>
                    <SiHtml5 size={50} color="orange"/>
                    <SiCss3 size={50} color="blue"/>
                    <SiJavascript size={50} style={{color:'#FFD900'}}/>
                    <SiCplusplus size={50} style={{color:'#001FC6'}}/>
                    <SiArduino size={50} style={{color:'#00A590'}}/>
                    <FcElectronics size={50}/>
                    <SiPhp size={50} style={{color:'violet'}}/>
                    <SiCsharp size={50} style={{color:'darkviolet'}}/>
                    <SiDotnet size={50} style={{color:'#605ca9'}}/>
                    <SiMysql size={50}/>
                    <SiPostgresql size={50} color="skyblue"/>
                    <FcCircuit size={50}/>
                    <FcLinux size={50}/>
                    <FaGitAlt size={50} style={{color:'F1502F'}}/>
                </div>
            </div>
        </div>

    );
}

export default Skill;