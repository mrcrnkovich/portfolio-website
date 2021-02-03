import React from 'react';

function TopNav(props){
  return (
        <nav className="menu">
          <input type="checkbox" id="menu-toggle" className="hidden"/>
          <label for="menu-toggle" className="hidden"><i class="fas fa-align-justify menu-nav"></i></label>
          <h1><a id="homeLink" href="/">Michael Crnkovich</a></h1>
          {props.HeaderLinks}
        </nav>
  );
}

export default TopNav;