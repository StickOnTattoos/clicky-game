import React from "react";
import data from "../../data.json";

import Navbar from "../Navbar";
import GameCard from "../GameCard"


class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            data,
            score: 0,
            topScore: 0
        }
    }

    handleImageClick = id => {
        console.log(id);
        this.setState({score: this.state.score +1});
    }

        render() {
            const { data, score, topScore } = this.state
            return (
                <div>
                    <Navbar score={score} topScore={topScore}/>
                    {data.map(item => <GameCard
                    handleImageClick={this.handleImageClick}
                    key={item.id} {...item} 
                    />
                    )}
                </div>
            )
        }
}

export default Game;