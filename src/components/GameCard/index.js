import React from "react";

function GameCard(props) {
    return (
        <div onClick={() => {props.handleImageClick(props.image)}}>
            <img src={props.image} />
        </div>
    )
}

export default GameCard;