import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { character } = props;
  const {
    characterName, killedBy, actorName, houseName, nickname, actors,
  } = character;

  let actor = '';

  // characters may have been played by multiple actors
  if (actorName != null) {
    actor = character.actorName;
  } else if (actors != null) {
    const array = [];
    actors.forEach((a) => {
      array.push(a.actorName);
    });
    actor = array.join(', ');
  }

  let description = '';
  if (houseName) {
    description += `House: ${houseName}`;
  }
  if (killedBy) {
    description += `, Killed by: ${killedBy}`;
  }
  if (nickname) {
    description += `, Nickname: ${nickname}`;
  }
  return (
    <div className="card card-body mb-2">
      <h5>
        {characterName}
        <span className="text-info ml-3">
          {actor}
        </span>
      </h5>
      <p className="text-muted mb-0">
        <small className="pr-4">{description}</small>
      </p>
    </div>
  );
}

Card.propTypes = {
  character: PropTypes.any.isRequired,
};

export default Card;
