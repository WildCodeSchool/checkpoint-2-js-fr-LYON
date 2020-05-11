// <Game /> récupère avec des props les informations de chaque jeu(name, background_image, rating…) et les affiche au format de ton choix.
// <Game /> contient un < button > qui permet au click de supprimer un jeu du state.Il n'y a pas besoin de le supprimer de l'API.

import React from 'react';

function Game(props) {
    return (
        <div className='gameCard'>
            <div className='gameName'>
                <h2>{props.name}</h2>
                <p>Rating : {props.rating} / 5</p>
            </div>
                <p>Genre : {props.genres.name}</p>
            <button className='button'>Remove it !</button>
        </div>
    )
}

export default Game;