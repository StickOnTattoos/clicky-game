import React from "react";
import "./GameCard.css";

function GameCard(props) {
    return (
        <div 
        className="allCards" 
        onClick={() => {props.handleImageClick(props.id, props.clicked)}}>
            <img src={props.image} id={props.id} alt="alt"/>
        </div>
    )
}

export default GameCard;