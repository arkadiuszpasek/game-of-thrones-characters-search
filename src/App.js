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
    this.inputChange = this.inputChange.bind(this);
  }

  async componentDidMount() {
    const res = await fetch('https://raw.githubusercontent.com/arkadiuszpasek/game-of-thrones-characters-search/master/data/characters.json');
    const characters = await res.json();

    this.setState({ characters });
  }

  inputChange(userInput) {
    this.setState({ input: userInput });
  }

  render() {
    const { input, characters } = this.state;
    return (
      <div className="container text-center">
        <Header />
        <SearchBox input={input} onChange={this.inputChange} />
        <MatchList characters={characters} input={input} />
      </div>
    );
  }
}

export default App;
