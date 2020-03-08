import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class MatchList extends React.Component {
  renderCard(character) {
    return (
      <Card character={character} />
    );
  }

  render() {
    const { characters, input } = this.props;
    let matchList;

    if (input.length === 0) {
      matchList = [];
    } else {
      const regex = new RegExp(`^${input}`, 'gi');

      matchList = characters.filter((character) => {
        // split name to display when someone starts typing name or surname or name and surname
        const nameArray = character.characterName.split(' ');
        return nameArray.some((el) => el.match(regex)) || character.characterName.match(regex);
      });
    }

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          {matchList.map((character) => this.renderCard(character))}
        </div>
      </div>
    );
  }
}

MatchList.propTypes = {
  characters: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired,
};

export default MatchList;
