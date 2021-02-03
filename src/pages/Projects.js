import React from 'react';
import Card from '../components/Card';

function Projects(props){
  return (
      <div className="projects">
        <h3 id="projects" className="shadow">Projects</h3>
        <div className="bottom-border shadow">
          <p> Skills: HTML5, CSS3, Javascript, Python, SQL </p>
          <p> Libraries: Pandas, Dash, React, Bootstrap</p>
        </div>
        <div className="row shadow p-2">
          <Card data={props.links} />
          <Card data={props.links} />
          <Card data={props.links} />
          <Card data={props.links} />
        </div>
      </div>);
}

export default Projects;