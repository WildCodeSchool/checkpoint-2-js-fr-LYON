import React from 'react';
import { Link } from 'react-router-dom';
import './Game.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Game(props) {
  return (
    <Card style={{ width: '18rem' }} className='card-container'>
      <Card.Img variant='top' src={props.background_image} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p>released : {props.released}</p> 
          <p>rating : {props.rating}</p> 
        </Card.Text>
        <Link to={`/jeu/screenshots/${props.id}`} className='sreenshots-link'>Game's screenshots</Link> <br/>
        <Button variant='dark' onClick={props.delGame.bind(this, props.name)} className='button'>Delete this game</Button>
      </Card.Body>
    </Card>
  )
}
