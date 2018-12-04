import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
            <h1 className="display-4">Clicky Game!</h1>
            <p>Click on any image get points, but dont click on any more than once!</p>
        </div>
    </div>
);

export default Jumbotron;