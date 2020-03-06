import React from 'react';
import Card from './Card';

class MatchList extends React.Component {
  renderCard(data) {
    return (
      <Card data={data} />
    );
  }

  render() {
    const { characters } = this.props;
    const xd = {
      name: 'Arya Stark',
      killedBy: 'Jaime Lannister',
      houseName: 'Stark',
      actor: 'Maisie Williams',
    };

    return (
      <div className="row justify-content-md-center">
        {/* <div className="col-md-6">
          {characters.forEach((character) => this.renderCard(character))}
        </div>
        <div className="col-md-6"> */}
          {/* {this.renderCard(xd)}
        </div> */}
      </div>
    );
  }
}

export default MatchList;
