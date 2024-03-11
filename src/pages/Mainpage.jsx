import React, {useState} from "react";
import Navbar from "../components/navbar";
import About from '../components/Content/About';
import Contact from '../components/Content/Contact';
import Projects from "../components/Content/Projects";
import Skill from '../components/Content/Skills'

const Mainpage = () => {

    const [activeTab,setActiveTab] = useState(0);
    
    const getContent = (activeTab) => {
        switch (activeTab){
            case 0: return <About/>
            case 1: return <Skill/>
            case 2: return <Projects/>
            case 3: return <Contact/>
        }
    }

    return(
        <div className="border w-full h-full flex flex-col p-2">       
            <div className="w-full h-14 flex justify-center mb-4">
                <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
            <div className="w-full h-full flex-grow overflow-hidden">
                {getContent(activeTab)}
            </div>           
        </div>
       
    );
}

export default Mainpage;