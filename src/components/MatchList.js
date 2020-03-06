import React from 'react';
import Card from './Card'

class MatchList extends React.Component {
  renderCard(data) {
    return (
      <Card data={data}/>
    );
  }
  render() {
    const xd={
      name: 'Arya Stark',
      killedBy: 'Jaime Lannister',
      houseName: 'Stark',
      actor: 'Maise Williams',
    }
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          {this.renderCard(xd)}
        </div>
      </div>
    );
  }
}

export default MatchList;
