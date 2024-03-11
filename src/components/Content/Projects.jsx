import React, { useState } from "react";

const Projects = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tab) => {
        setActiveTab(activeTab === tab ? null : tab)
    }
    return(
        <div className="flex justify-center p-4 h-full">
            <div className="border w-3/4 h-full flex">

                {/* sidebar */}
                <div className="border h-full w-1/4 grid grid-cols-1 px-2 py-6 space-y-2">
                    <button
                        className={`rounded-xl hover:bg-blue2 ${activeTab === 0 ? 'bg-blue1' : ''}`}
                        onClick={() => handleTabClick(0)}
                    >
                        Banana Hand Class Segregator
                    </button>
                    <button
                        className={`rounded-xl hover:bg-blue2 ${activeTab === 1 ? 'bg-blue1' : ''}`}
                        onClick={() => handleTabClick(1)}
                    >
                        HRIS
                    </button>
                    <button
                        className={`rounded-xl hover:bg-blue2 ${activeTab === 2 ? 'bg-blue1' : ''}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Bank Reconcillation
                    </button>
                    <button
                        className={`rounded-xl hover:bg-blue2 ${activeTab === 3 ? 'bg-blue1' : ''}`}
                        onClick={() => handleTabClick(3)}
                    >
                        Biometrics API
                    </button>
                </div>

                {/* display panel */}
                <div className="border h-full flex flex-grow">dock</div>
            </div>
        </div>

    );
}

export default Projects;