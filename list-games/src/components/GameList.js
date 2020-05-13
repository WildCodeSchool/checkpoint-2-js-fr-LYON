import React, {Component} from "react";
import axios from "axios";
import Game from './Game';


class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    this.handleDelete = this.handleDelete.bind(this);
}

  
  componentDidMount() {
    axios
      .get("https://wild-games.herokuapp.com/api/v1/")
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          games: data
        });
      });
  }

  handleDelete = gameTobeDeleted => {
    this.setState(
      {
        games: [...this.state.games.filter(g => g.name !== gameTobeDeleted)]
      },
      () => alert(`${gameTobeDeleted} Supprimé !`)
    );
  };

  render() {
    const gamelist = this.state.games;
    return (
    
          <div className="display-name">
          <h1 className="App-title">List of Games</h1>
        {
         gamelist
           .map(g => (
         <Game
              key={g.id}
              name={g.name}
              img={g.background_image}
              id={g.id}
              rating={g.rating}
              handleDelete={this.handleDelete} />
            ))}
         </div>
       );
      }
 }

export default GameList;

