import React from 'react';
import ListLink from './ListLink';

function SideBar(props){
  return (
      <div className="side-bar">
        <ul>
          <ListLink items={props.items} />
        </ul>
      </div>
  );
}

export default SideBar;
