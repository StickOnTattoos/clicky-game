import React from "react";
import "./GameCard.css";

function GameCard(props) {
    return (
        <div 
        className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" 
        onClick={() => {props.handleImageClick(props.id, props.clicked)}}>
            <img src={props.image} id={props.id} alt="alt"/>
        </div>
    )
}

export default GameCard;