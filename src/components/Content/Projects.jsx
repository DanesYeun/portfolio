import React, { useState } from "react";
import BananaSeg from "../Cards/BananaSeg";
import Hris from "../Cards/Hris";
import BankRecon from "../Cards/BankRecon";
import Biometrics from "../Cards/Biometrics";

const Projects = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tab) => {
        setActiveTab(activeTab === tab ? null : tab)
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
        <div className="flex justify-center p-4 h-full">
            <div className="border w-full md:w-3/4 bg-white1 rounded-xl h-full flex flex-col md:flex-row">

                {/* sidebar */}
                <div className="border-r h-full w-full md:w-1/4 flex justify-evenly md:grid md:grid-cols-1 px-2 py-6 space-y-2">
                    <button
                        className={`rounded-xl hover:bg-blue2 ${activeTab === 0 ? 'bg-blue1 text-white1' : ''}`}
                        onClick={() => handleTabClick(0)}
                    >
                        Banana Hand Class Segregator
                    </button>
                    <button
                        className={`rounded-xl hover:bg-blue2 ${activeTab === 1 ? 'bg-blue1 text-white1' : ''}`}
                        onClick={() => handleTabClick(1)}
                    >
                        HRIS
                    </button>
                    <button
                        className={`rounded-xl hover:bg-blue2 ${activeTab === 2 ? 'bg-blue1 text-white1' : ''}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Bank Reconcillation
                    </button>
                    <button
                        className={`rounded-xl hover:bg-blue2 ${activeTab === 3 ? 'bg-blue1 text-white1' : ''}`}
                        onClick={() => handleTabClick(3)}
                    >
                        Biometrics API
                    </button>
                </div>

                {/* display panel */}
                <div className="h-full w-full md:w-4/5 p-2">
                    {getCard(activeTab)}
                </div>
            </div>
        </div>

    );
}

export default Projects;