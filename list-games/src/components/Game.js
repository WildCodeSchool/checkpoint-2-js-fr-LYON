import React from "react";
import "./game.css";

function Game(props) {
  return (
    <figure className="GameCard">
      <img src={props.img} alt={props.name} />
      <figcaption>
        <blockquote>
          <strong>Id </strong>:{props.id}
        </blockquote>
        <hr />
        <p>
          <cite>
            <strong>Name</strong> : {props.name}
          </cite>
        </p>
        <hr />

        <blockquote>
          <strong>Rating </strong>:{props.rating}
        </blockquote>

        <button onClick={() => props.handleDelete(props.name)}>
          Delete this game
        </button>
      </figcaption>
    </figure>
  );
}

export default Game;
