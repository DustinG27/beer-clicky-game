import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <header className="scoreB">
      <div className="row">
        <div className="col-md-6 col-left"><h5>{props.title}</h5></div>
        <div className="col-md-3 col-right"><h6>High Score {props.score}</h6></div>
        <div className="col-md-3 col-right"><h6>Current Score: {props.topScore}</h6></div>
      </div>
      <div className="row">
      <div className="col-md-12 col-right">
      <h6>Click on a beer you love! You can only click each image once or you lose the game.</h6></div>
      </div>
    </header>
  );
}

export default Header;