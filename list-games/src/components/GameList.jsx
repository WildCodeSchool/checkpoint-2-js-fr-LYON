// <GameList /> récupère les jeux de l'API et les affiche dans autant de composants <Game />

import React from 'react';
import Game from './Game';
import Axios from 'axios';

class GameList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                gameList: []
            }
        }

    componentDidMount() {
        this.getGames();
    }

    getGames = () => {
        Axios.get('https://wild-games.herokuapp.com/api/v1')
        .then(res => this.setState({ gameList: res.data}))
    }

    render() {
        return (
            <div>
                <Game />
            </div>
        )
    }
}

export default GameList;
