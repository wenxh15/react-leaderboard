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
        {
          player: this.state.player,
          score: this.state.score
        }
      ],
      player: "",
      score: ""
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
    let newTable = this.state.table.sort((a, b) => b.score - a.score);
    return (
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {newTable.map((item, index) => (
          <tr>
            <td key={index}>{index + 1}</td>
            <td key={index}>{item.player}</td>
            <td key={index}>{item.score}</td>
          </tr>
        ))}
      </table>
    );
  }

  render() {
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
          type="number"
        />
        <button onClick={this.handleClick}>submit</button>
        {this.renderTable}
      </div>
    );
  }
}
