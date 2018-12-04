import React from "react";
import data from "../../data.json";

import ScoreCard from "../ScoreCard";
import GameCard from "../GameCard"
import "./Game.css";



class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            data,
            score: 0,
            topScore: 0,
            message: "Click one of the pictures to begin!"
        }
    }

    handleImageClick = (id, clicked) => {

        const imageOrder = this.state.data;

        if (clicked) {
            imageOrder.forEach((image, index) => {
                imageOrder[index].clicked = false;
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "Wrong! Try again",
                score: 0
            })
        }
        else {
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                    imageOrder[index].clicked = true;
                }
            });

            const { topScore, score } = this.state;
            const newScore = score + 1;
            const newTopScore = newScore > topScore ? newScore : topScore;

            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "Correct!",
                score: newScore,
                topScore: newTopScore,
            })
        }   
    }

        render() {

            const {
                // data,
                score,
                topScore
              } = this.state;

            return (
                <div className="container-fluid mainContainer">

                    <ScoreCard score={score} topScore={topScore}/>

                    <div className="message">
                    <p>{this.state.message}</p>
                    </div>

                    <div className="container">

                        <div className="row">
                            {this.state.data.map(data => (
                                <GameCard
                                    key={data.id}
                                    id={data.id}
                                    clicked={data.clicked}
                                    image={data.image}
                                    handleImageClick={this.handleImageClick}
                                    />
                            ))}
                        </div>
                    </div>
                </div>
            )
        }

}

export default Game;