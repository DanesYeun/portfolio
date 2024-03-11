import React from "react";

const Navbar = ({activeTab,setActiveTab}) => {

    const handleTabClick = (tabName) => {
        setActiveTab(tabName === activeTab ? activeTab : tabName);
    }

    return(
        <div className="border rounded-xl w-1/2 h-full bg-white flex justify-evenly items-center ">
            <button 
                className={`boder hover:bg-gray-200 p-2 
                    ${activeTab === 0 ? 'border-b-2 border-red-400 hover:rounded-t-md' : 'hover:rounded-md'}`}
                onClick={() => handleTabClick(0)}>
                About Me
            </button>
            <button 
                className={`boder hover:bg-gray-200 p-2 
                ${activeTab === 1 ? 'border-b-2 border-red-400 hover:rounded-t-md' : 'hover:rounded-md'}`}
                onClick={() => handleTabClick(1)}>
                Skills
            </button>
            <button 
                className={`boder hover:bg-gray-200 p-2 
                ${activeTab === 2 ? 'border-b-2 border-red-400 hover:rounded-t-md' : 'hover:rounded-md'}`}
                onClick={() => handleTabClick(2)}>
                Projects
            </button>
            <button 
                className={`boder hover:bg-gray-200 p-2 
                ${activeTab === 3 ? 'border-b-2 border-red-400 hover:rounded-t-md' : 'hover:rounded-md'}`}
                onClick={() => handleTabClick(3)}>
                Contact Card
            </button>
        </div>
    )
}

export default Navbar;