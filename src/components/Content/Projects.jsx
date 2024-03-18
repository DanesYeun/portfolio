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
        <div>asda</div>

    );
}

export default Projects;