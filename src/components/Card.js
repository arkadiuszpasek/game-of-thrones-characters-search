import React from 'react';

function Card(props) {
  const {name, killedBy, actor, houseName} = props.data;
  let description = '';
  if(houseName){
    description += `House: ${houseName}`;
  }
  if(killedBy){
    description += ` , Killed by: ${killedBy}`;
  }
  return (
    <div className="card card-body mb-2">
      <h5>{name} <span className="text-info">{actor}</span></h5>
       <p className="text-muted mb-0">
        <small class="pr-4">{description}</small>
       </p>
    </div>
  )
}

export default Card;