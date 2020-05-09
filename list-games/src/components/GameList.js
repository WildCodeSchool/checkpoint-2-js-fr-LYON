import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';

export class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gams: [],
    };
  }

  componentDidMount() {
    axios.get('https://wild-games.herokuapp.com/api/v1').then(res => {
      console.log(res);

      this.setState({ gams: res.data });
    });
  }

  handleDelete = e => {
    const { gams, id } = this.state;
    const gamDelete = [...gams.reverse()];
    var index = gamDelete.indexOf(e.target.value);
    gamDelete.splice(index, 1);
    this.setState({ gams: gamDelete });
    console.log(id);
  };

  handleFilter = () => {
    const { gams } = this.state;
    const gamsFilter = gams.filter(gam => gam.rating >= 4.5);
    this.setState({ gams: gamsFilter });
  };

  render() {
    const gams = this.state.gams.map(gam => (
      <div className="container" key={gam.id}>
        <h3>{gam.name}</h3>
        <p> Released : {gam.released}</p>
        <p> Rating : {gam.rating}</p>
        <img src={gam.background_image} alt="" />
        <hr />
      </div>
    ));
    return (
      <div>
        <Game
          gams={gams}
          delete={this.handleDelete}
          filter={this.handleFilter}
        />
      </div>
    );
  }
}

export default GameList;
