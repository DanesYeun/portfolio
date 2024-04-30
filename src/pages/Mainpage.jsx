import React, {useState} from "react";
import Navbar from "../components/Navigation/navbar";
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
        <div className="w-screen h-screen">       
            <div className="mx-auto md:max-w-2xl h-16 p-2">
               <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
            <div className="border rounded-xl bg-blue-400 mx-auto md:max-w-2xl md:h-4/5 mt-2">
                {getContent(activeTab)}
            </div>
        </div>
       
    );
}

export default Mainpage;