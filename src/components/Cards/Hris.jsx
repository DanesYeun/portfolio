import React from "react";
import image1 from '../../assets/images/deprecated/Login v2.jpg';
import image3 from '../../assets/images/deprecated//TIME ON BREAK.jpg'

const Hris = () => {

    return(
        <div className="w-full h-full flex">
            <div className="border-r w-1/2 grid grid-cols-1 p-2">
                <div className="shadow-md h-fit rounded-2xl">
                    <img src={image1} alt="Photo_1" 
                        className="object-cover rounded-2xl hover:transform hover:scale-150 transition duration-300 ease-in-out"/>
                </div>
                <div className="border shadow-md h-fit rounded-2xl">
                    <img src={image3} alt="Photo_3" 
                        className="object-cover rounded-2xl hover:transform hover:scale-150 transition duration-300 ease-in-out"/>
                </div>
            </div>
            <div className="w-1/2 p-2">
                <h1 className="flex justify-center hover:text-red-400 hover:cursor-pointer">
                    <a href="http://hris.app" target="_blank">
                    HRIS.app
                    </a>
                </h1>
                <div className="h-full m-4">
                    During my internship at Netzon Tech, I played a pivotal role in migrating an HRIS app, mastering C# backend development and React frontend integration. From making API calls to designing sleek interfaces with Figma and Tailwind CSS, I embraced every challenge with enthusiasm. Thanks to Git for version control and Swagger for OpenAPI, I honed my collaborative skills and delivered top-notch solutions with flair!
                </div>
            </div>
        </div>
    )
}

export default Hris;