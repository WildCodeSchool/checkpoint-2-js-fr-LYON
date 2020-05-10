import React from 'react';
import { Link } from 'react-router-dom';
import './Screenshots.css';

const Screenshots = (props) => {
  const params = props.match.params;
  const game = props.location.query.game.game;
  console.log(game);
  const imagesList = game.short_screenshots.map(image => <img key={image.id} src={image.image} alt={game.name} />);

  return (
    <div className='screenshots'>
      <h2>Screenshots of the game: {game.name}</h2>
      {imagesList}
      <p><Link to='/'><button>Back home</button></Link></p>
    </div>
  );
};

export default Screenshots;
