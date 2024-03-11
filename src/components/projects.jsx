import React,{useState} from "react";
import '../assets/styles/Global.css'
import pic3 from '../assets/images/pic3.jpg';

function Projects(){

    const [selectedTab,setSelectedTab] = useState(1);

    const tabs = [
        { id: 1, name: "Banana Class Segregator", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum enim eum debitis quaerat omnis sapiente maiores asperiores delectus rerum tempora!", image:pic3},
        { id: 2, name: "HRIS", content: "Lorem 1 ipsum, dolor sit amet consectetur adipisicing elit. Possimus, exercitationem!"  },
        { id: 3, name: "Bank Reconcilaltion", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum blanditiis soluta libero rem. Vitae hic, inventore deleniti magni suscipit nihil officia dolorum aperiam, adipisci accusamus quisquam? Perferendis, totam alias."  },
        { id: 4, name: "ZKTeco API", content: "API API API API API API"  },
    ];

    return(
        <div className="flex w-full h-1/2">
            <div className="sidebar broder bg-gray1 w-1/2 p-4 rounded-l-lg">
                {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`block w-full text-left ${
                    selectedTab === tab.id ? "bg-blue1 rounded-lg text-white" : "text-gray-800"
                    } p-2 mb-2 hover:bg-blue2 rounded-lg`}
                    onClick={() => setSelectedTab(tab.id)}
                >
                    {tab.name}
                </button>
                ))}
            </div>
            <div className="display-window grid grid-cols-2 border bg-white p-4 w-full rounded-r-lg">
                <div className="w-full">
                    {tabs.map((tab) =>
                        tab.id === selectedTab ? (
                            <div key={tab.id} className="break-normal h-full"> {tab.content}</div>
                        ) : null
                    )}
                </div>
                <div className="border w-full h-full flex place-content-center items-center">
                    {tabs.map((tab) =>
                        tab.id === selectedTab ?(
                            <div key={tab.id} className="break-normal h-full"> <img className="w-full h-full" src={tab.image}/></div>
                        ) : null
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;