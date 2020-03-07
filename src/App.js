import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    player: "",
    score: "",
    table: []
  };

  handleClick = () => {
    this.setState({
      table: [
        ...this.state.table,
        { player: this.state.player, score: this.state.score }
      ]
    });
  };

  handlePlayer = e => {
    this.setState({
      player: e.target.value
    });
  };

  handleScore = e => {
    this.setState({
      score: e.target.value
    });
  };

  get renderTable() {
    return (
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </table>
    );
  }

  render() {
    console.log(this.state.table);
    return (
      <div className="App">
        <h1>Leaderboard</h1>
        <p>player</p>
        <input
          placeholder={"player"}
          onChange={this.handlePlayer}
          value={this.state.player}
        />
        <p>score</p>
        <input
          placeholder={"score"}
          onChange={this.handleScore}
          value={this.state.score}
        />
        <button onClick={this.handleClick}>submit</button>
        {this.renderTable}
      </div>
    );
  }
}
