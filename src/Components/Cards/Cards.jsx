import React from "react";
import "./Cards.css"

function Cards({data}) {
    let container = "cards-container";
    let pricing = "cards-pricing";

    if (data.isPurple) {
        container = "cards-container-purple";
        pricing = "cards-pricing-purple"
    }

    return (
        <div className={container}>
            <span>{data.title}</span>
            <div className={pricing}>
                <h2>$</h2>
                <h1>{data.price}</h1>
            </div>
            <span></span>
            <span>{data.text1}</span>
            <span></span>
            <span>{data.text2}</span>
            <span></span>
            <span>{data.text3}</span>
            <span></span>
            <button className="cards-button" type="button">LEARN MORE</button>
        </div>
    );
}

export default Cards