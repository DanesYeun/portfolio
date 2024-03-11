import React, { useEffect, useState } from "react";
import '../../src/assets/styles/Global.css';

function Navbar(){

    const [isSticky,setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setSticky(true);
            }else{
                setSticky(false);
            }
        };

        window.addEventListener("scroll",handleScroll);
        return () => {
            window.removeEventListener("scroll",handleScroll);
        };
    },[]);

    const handleClick = (id) => {
        const component = document.querySelector(id);
        if(component){
            component.scrollIntoView({ behavior : "smooth" });
        }
    };

    return(
        <nav className={`flex-container px-3 pt-3 ${isSticky ? "sticky top-0 left-0 right-0 z-1000 rounded-xl bg-white1" : "flex-container p-3"}`}>
            <ul className="flex p-2 border-b space-x-10 justify-center">
                <li><h2><a href="/">About</a></h2></li>
                <li><h2><a href="#Skills" onClick={(event) => handleClick('#Skills')}>Skills</a></h2></li>
                <li><h2><a href="#Projects" onClick={(event) => handleClick('#Projects')}>Projects</a></h2></li>
                <li><h2><a href="#Contact" onClick={(event) => handleClick('#Contact')}>Contact</a></h2></li>
            </ul>
        </nav>
    );
}
export default Navbar;