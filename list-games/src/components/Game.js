import React from 'react';

const Game = props => {
  return (
    <div>
      <h1 className="title">Game Liste</h1>
      <div className="boutons">
        <button className="btn btn-primary" onClick={props.filter}>
          Filter game
        </button>
        <button className="btn btn-primary" onClick={props.delete}>
          Delete game
        </button>
      </div>
      {props.gams}
    </div>
  );
};

export default Game;
