import React from "react";
import "./Cards.css"

function Cards(props) {
    let container = "cards-container";
    let pricing = "cards-pricing";

    if (props.isPurple) {
        container = "cards-container-purple";
        pricing = "cards-pricing-purple"
    }

    return (
        <div className={container}>
            <span>{props.title}</span>
            <div className={pricing}>
                <h2>$</h2>
                <h1>{props.price}</h1>
            </div>
            <span></span>
            <span>{props.text1}</span>
            <span></span>
            <span>{props.text2}</span>
            <span></span>
            <span>{props.text3}</span>
            <span></span>
            <button className="cards-button" type="button">LEARN MORE</button>
        </div>
    );
}

export default Cards