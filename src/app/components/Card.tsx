import React from "react";

interface props {
    title: string;
    body: string;
    picture: string;
}

const Card: React.FC<props> = ({title, body, picture}) => {
    return (
        <div className="card h-full bg-base-100 w-full shadow-sm tooltip" data-tip="Designed by Freepik">
            <figure>
                <img
                src={picture}
                alt="picture" />
            </figure>
            <div className="card-body flex">
                <h2 className="card-title">
                    {title}
                </h2>
                <code>{body}</code>
            </div>
            {/* <a href="http://www.freepik.com" className="text-xs">Designed by Freepik</a> */}
        </div>
    
    )
}

export default Card