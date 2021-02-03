/*-----------------------------------------------------------------------------/
 *    Returns a React Card Component
 *    
 *    Params: 
 *        data.link : Provide a link to the item the card represents
 *        data.photo: Provide a reference to a jpg for the card
 *
/-----------------------------------------------------------------------------*/


import React from 'react';
import foto from '../background.jpg';

function Card(props){
  return (
    <div className="card">
      <a href={props.data.link}>
        <img className="thumbnail" src={foto} alt="missing file" />
        <div className="col">
          <h4>{props.data.name}</h4>
          <p>This is a description of the project</p>
        </div>
      </a>
    </div>);
}

export default Card;
