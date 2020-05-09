import React from 'react';
import Game from './Game';
import axios from 'axios';

class GameList extends React.Component {
  constructor() {
    super();
    this.state = {
      gameList: [],
      filter: false,
    }
  }
  componentDidMount() {
    this.getGame();
  };

  getGame = () => {
    axios.get('https://wild-games.herokuapp.com/api/v1')

    .then(res => res.data)

    .then(data => {
      this.setState({gameList: data});
    })
  };

  filtered = () => {
    this.setState((prevState) => {return {filter: !prevState.filter}})
  };

  deletItem = (id) => {
    this.setState({gameList: [...this.state.gameList.filter(item => item.id !== id)]})

  };

  render() {
    const {gameList, filter} = this.state;
    const filteredGame = gameList
    .filter(g => !filter || g.rating >= 4.5)
    console.log(filteredGame);
    return (
      <div>
      <button onClick={this.filtered}>{this.state.filter ? "All games" : 'Best games'}</button>
        {
        filteredGame.map(g => <Game key={g.id} {...g} handleClick={this.deletItem} />)
        }
      </div>
    );
  };
}
export default GameList;
