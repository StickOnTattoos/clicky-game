import React from "react";
import "./ScoreCard.css";

function ScoreCard (props) {
    return (
        <div className="scores" keys={props.id}>
            <p>Score: {props.score} | Top Score: {props.topScore}</p>
        </div>
    )
}

export default ScoreCard;

// {/* <li>Score: {props.score} | Top Score: {props.topScore}</li> */}