import React from 'react';
import axios from 'axios';
import Game from './Game';

class GameList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allGameList: [],
      highRateGames: [],
      allGames: true,
      loading: true
    };
  }

  getData = async () => {
    try {
      let response = await axios.get('https://wild-games.herokuapp.com/api/v1');
      const allGameList = response.data;
      this.setState({ allGameList, loading: false });
    } catch (error) {
          // Error 😨
        if (error.response) {
          /*
          * The request was made and the server responded with a
          * status code that falls out of the range of 2xx
          */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
      } else if (error.request) {
          /*
          * The request was made but no response was received, `error.request`
          * is an instance of XMLHttpRequest in the browser and an instance
          * of http.ClientRequest in Node.js
          */
          console.log(error.request);
      } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
      }
      console.log(error);
    }
  };

  componentDidMount () {
    this.getData();
  }

  handleDeleteGame (gameId) {
    const temporaryTable = this.state.allGameList;
    const indexOfDelElement = temporaryTable.findIndex((game) => game.id === gameId);
    temporaryTable.splice(indexOfDelElement,1);
    this.setState({ allGameList: temporaryTable });
  }

  handleRatedGames () {
    const highRateGames = this.state.allGameList.filter((game) => game.rating >= 4.5);
    this.setState({ highRateGames, allGames: !this.state.allGames });
  }

   render () {
     const userList = (this.state.allGames ? this.state.allGameList : this.state.highRateGames)
       const list = userList.map(game =>
        <>
          <Game game={game} onClick={this.handleDeleteGame} />
          {this.state.allGames && <button key={`${game.id}`} onClick={() => this.handleDeleteGame(game.id)}>Delete {game.name}</button>}
        </>
      );
     
    return (
      <div>
        { (this.state.loading) ? (<p>Loading data...</p>) : (
          <div>
            <h1>Welcome to the game list of a non-gamer guy!</h1>
            <button onClick={() => this.handleRatedGames()}>{this.state.allGames ? 'Best games' : 'All games'}</button>
            {list}
          </div>
        )}
        </div>
    )
  }
}

export default GameList;
