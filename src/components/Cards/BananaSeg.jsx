import React from "react";
import image from '../../assets/images/pic2.jpg';

const BananaSeg = () => {

    return(
        <div className="w-full h-full">
                <img src={image} alt="Photo" className="object-fill rounded-xl"/>
            <div className="h-1/2">
                <h2 className="p-2 hover:text-red-400"><a href="https://www.google.com" target="_blank">Banana Hand Class Segregator</a></h2>
                <h4 className="p-1 text-justify">Say hello to the future of banana sorting! Our Banana Hand Class Segregator combines cutting-edge machine learning, Arduino wizardry, and top-notch electronics to revolutionize how you handle bananas. With its automated classification system, it not only boosts efficiency but also slashes labor costs, ensuring only the finest bananas make it to market. Say goodbye to tedious manual sorting and embrace the smart solution with Banana Hand Class Segregator!</h4>
            </div>
        </div>
    );
}

export default BananaSeg;