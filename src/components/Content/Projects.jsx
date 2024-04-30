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
        <div className="w-full h-full border p-2">
            <div className="flex h-full text-white">

                {/* sidebar */}
                <div className="border w-1/4 rounded-l-xl p-2 flex flex-col justify-center space-y-2">
                    <button className="p-2 hover:bg-blue-500 rounded-md"
                        onClick={() => handleTabClick(0)}
                    >
                        Banana Hand Class Segregator
                    </button>
                    <button className="p-2 hover:bg-blue-500 rounded-md disabled"
                        onClick={() => handleTabClick(null)}
                    >
                        Comming Soon
                    </button>
                </div>

                {/* mainview */}
                <div className="border w-3/4 rounded-r-xl p-2">
                    {getCard(activeTab)}
                </div>
            </div>
        </div>
        // <div className="flex justify-center p-4 h-full">
        //     <div className="w-full md:w-3/4 bg-white1 rounded-xl h-full flex flex-col md:flex-row">

        //         {/* sidebar */}
        //         <div className="h-1/2  md:h-full w-full md:w-1/4 flex justify-center items-center md:flex md:flex-col p-2">
        //             <button
        //                 className={`rounded-xl hover:bg-blue2 w-full h-full md:h-1/4 ${activeTab === 0 ? 'bg-blue1 text-white1' : ''}`}
        //                 onClick={() => handleTabClick(0)}
        //             >
        //                 Banana Hand Class Segregator
        //             </button>
        //             {/* <button
        //                 className={`rounded-xl hover:bg-blue2 h-full w-full md:h-1/4 ${activeTab === 1 ? 'bg-blue1 text-white1' : ''}`}
        //                 onClick={() => handleTabClick(1)}
        //             >
        //                 HRIS
        //             </button> */}
        //         </div>

        //         {/* display panel */}
        //         <div className="h-full w-full w-full md:w-4/5 p-2">
        //             {getCard(activeTab)}
        //         </div>
        //     </div>
        // </div>

    );
}

export default Projects;