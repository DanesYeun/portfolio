import React, { useState } from "react";
import BananaSeg from "../Cards/BananaSeg";
import Hris from "../Cards/Hris";
import BankRecon from "../Cards/BankRecon";
import Biometrics from "../Cards/Biometrics";

const Projects = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tab) => {
        setActiveTab(activeTab === tab ? tab : tab)
    }
    
    const getCard = (activeTab) => {
        switch (activeTab){
            case 0: return <BananaSeg />
            case 1: return <Hris />
            case 2: return <BankRecon/>
            case 3: return <Biometrics/>
        }
    }
    return(
        <div className="w-full h-full p-2">
            <div className="flex h-full text-white">

                {/* sidebar */}
                <div className="border-r w-1/4 rounded-l-xl p-2 flex flex-col justify-center space-y-2">
                    <button className={`p-2 rounded-md ${activeTab === 0 ? 'bg-blue-500 ' : 'hover:bg-blue-500'}`}
                        onClick={() => handleTabClick(0)}
                    >
                        Banana Hand Class Segregator
                    </button>
                    <button className={`p-2 rounded-md ${activeTab === null ? 'bg-blue-500 ' : 'hover:bg-blue-500'}`}
                        onClick={() => handleTabClick(null)}
                    >
                        Comming Soon
                    </button>
                </div>

                {/* mainview */}
                <div className="w-3/4 rounded-r-xl p-2">
                    {getCard(activeTab)}
                </div>
            </div>
        </div>
    );
}

export default Projects;