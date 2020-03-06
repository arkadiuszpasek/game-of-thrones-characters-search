import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

import SearchBox from './components/SearchBox';
import Header from './components/Header';
import MatchList from './components/MatchList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      characters: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('../data/characters.json');
    const characters = await res.json();

    this.setState({ characters });
    console.log(characters);
  }

  inputChange(userInput) {
    this.setState({ input: userInput });
  }

  updateList() {
    const { input } = this.state;


  }

  render() {
    const { input, characters } = this.state;
    return (
      <div className="container text-center">
        <Header />
        <SearchBox input={input} onChange={this.inputChange} />
        <MatchList characters={characters} />
      </div>
    );
  }
}

export default App;
