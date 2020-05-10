import React from 'react';
import Game from './Game';
import { Link } from 'react-router-dom';

function GameList (props) {
  const games = props.games;
  // const params = this.props.match.params;
  return (
    <div>
      {games.map((game) =>
        <Game key={game.name} {...game} delGame={props.delGame} />)}
        {games.map((game) =>
        <div><Link to={`/jeu/screenshots/${props.id}`}>Game's screenshots</Link></div>)}
    </div>
  );
}

export default GameList;