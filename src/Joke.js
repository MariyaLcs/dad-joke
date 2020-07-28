import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";

class Joke extends Component {
  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.props.upvote}>
            <span>{this.props.votes}</span>
          </i>
          <i className="fas fa-arrow-down" onClick={this.props.downvote}></i>
        </div>
        <div className="Jokes-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Joke;
