import React, { Component } from "react";
import Container from "./Components/Container/index";
import Header from "./Components/Header/header";
import card from "./card.json";
import Wrapper from "./Components/Wrapper/wrapper";
import "./App.css";

// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    card,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedbeer: [],
  };

  clickedImage = (id) => {
    // assign the state of the empty array to a let to be updated
    let clickedbeer = this.state.clickedbeer;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0,
    });

    // if the clicked image has an id of the indexed beer
    if (clickedbeer.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedbeer.push(id);
      console.log(clickedbeer);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedbeer: [],
      });
    } else {
      // alert player loss
      this.setState({
        score: 0,
        clickedbeer: [],
      });
      console.log("repeated");
      this.setState({
        showAlert: 1,
      });
    }
    // updating the top score if user beats previous one
    if (score > topScore) {
      this.setState({
        topScore: score,
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ card: shuffle(card) });
  };

  render() {
    return (
      <Wrapper>
        <Header
          title="beer clicky game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {this.state.card.map((cards) => (
          <Container
            id={cards.id}
            key={card.id}
            name={cards.name}
            image={cards.image}
            style={cards.style}
            notes={cards.notes}
            clickedImage={this.clickedImage}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
