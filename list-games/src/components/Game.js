import React from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

export default function Game(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>released : {props.released}</p> 
      <p>rating : {props.rating}</p> 
      <img src={props.background_image} alt={props.name} className='gameImg' /> <br/>
      <Link to={`/jeu/screenshots/${props.id}`}>Game's screenshots</Link> <br/>
      <button onClick={props.delGame.bind(this, props.name)}>Delete this game</button>
    </div>
  )
}
