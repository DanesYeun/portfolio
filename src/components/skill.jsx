import React from "react";
import '../assets/styles/Global.css';
import { SiArduino, SiCplusplus, SiCsharp, SiCss3, SiDotnet,SiHtml5,SiJavascript, SiMysql, SiPhp, SiPostgresql, SiReact  } from "react-icons/si";
import { FcCircuit, FcLinux,FcElectronics } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa";

function Skills(){
    return(
        <div id="Skills" className="px-32">
            <div className="flex justify-center border-b mb-4">
                <h1>Why Hire Me?</h1>
            </div>
            <div className="mb-6">
                <body>
                    Envision your projects transformed with my expertise spanning React, HTML, CSS, C++, Arduino, C#, .NET, MySQL, PostgreSQL, embedded systems, and Linux. I bring a dynamic fusion of technical proficiency and creative innovation, guaranteeing unparalleled results that dazzle and inspire. Let's embark on a journey of innovation and success together.
                </body>
            </div>
            <div className="border-b flex justify-center mb-4">
                <h1>Skills</h1>
            </div>
            <div>
                <div className="flex justify-evenly mb-10">
                    <SiReact size={50} color="skyblue"/>
                    <SiHtml5 size={50} color="orange"/>
                    <SiCss3 size={50} color="blue"/>
                    <SiJavascript size={50} style={{color:'#FFD900'}}/>
                    <SiCplusplus size={50} style={{color:'#001FC6'}}/>
                    <SiArduino size={50} style={{color:'#00A590'}}/>
                    <FcElectronics size={50}/>
                </div>
                <div className="flex justify-evenly">
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

export default Skills;