import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.clickedImage(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="overlay">
        <div className="text">
          <strong>Name:</strong> {props.name}
          <br />
          <strong>Style:</strong> {props.style}
          <br />
          <strong>Notes:</strong> {props.notes}
        </div>
      </div>
    </div>
  );
};

export default Card;
