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
    };
  }

  inputChange(userInput) {
    console.log(userInput);
  }

  render() {
    const { input } = this.state;
    return (
      <div className="container text-center">
        <Header />
        <SearchBox input={input} onChange={this.inputChange} />
        <MatchList />
      </div>
    );
  }
}

export default App;
