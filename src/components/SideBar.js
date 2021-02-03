import React from 'react';


function SideBar(props){
  return (
      <div className="side-bar">
        <ul>
          <ListLink items={props.items} />
        </ul>
      </div>
  );
}

export default Sidebar;