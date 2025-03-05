import React from "react";

interface props {
    title: string;
    body: string;
}

const CardSm: React.FC<props> = ({title, body}) => {
    return (
        <div className="card h-full w-full bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <code>{body}</code>
            </div>
        </div>
    )
}

export default CardSm