import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import foto from './foto.jpg';

function About(props){
  const pic = <img id="about-foto" src={foto} alt="Not Found"></img>;
  const para = <div><p>Michael is a certified public accountant, interested in web development and data engineering. Michael
      has experience working with Python for web development using Flask, and for data analysis using Pandas and Dash. He
      also has experience using SQL in Postgres and SQLite. This website was built using ReactJS.
      </p><p>In his spare time he enjoys guitar, coffee, and long bike rides on the beach.</p></div>;

return (<div className="about">{pic}{para}</div>);


}

function Card(props){
  return (
    <div className="card">
      <a href={props.link}>
        <img className="thumbnail" src={foto} alt="missing file" />
        <h4>{props.name}</h4>
        <p>description</p>
      </a>
    </div>);
}


function ListLinkNewTab(props){
    return props.items.map((item)=>
      (<li>
        <a target="_blank" rel="noreferrer noopener" href={item.link}>
        {item.name}
        </a>
      </li>));
}

function ListLink(props){
    return props.items.map((item)=>
      (<li>
        <a href={item.link}>
        {item.name}
        </a>
      </li>));
}




function App() {
  const links = [{link:"https://www.github.com/mrcrnkovich", name:"GitHub"},
                  {link:"https://www.linkedin.com/in/michaelcrnkovich", name:"LinkedIn"}]
  const internalLinks = [{link:"/blog", name:"Blog"},
                  {link:"/about", name:"About"}];

  const HeaderLinks = (
              <ul id="menu">
                <ListLink items={internalLinks} />
                <ListLinkNewTab items={links} />
              </ul>);
  
  const proLinks = [{link:"https://www.github.com/mrcrnkovich", name:"CRM"}]
  return (
    <Router>
    <div className="App">
        <nav class="menu">
          <a id="homeLink" href="/"><h1>Michael Crnkovich</h1></a>
          {HeaderLinks}
        </nav>
        <div id="content">
    <Switch>
      <Route exact path="/">
        <h3>Landing Page</h3>
        <h3 id="projects">Projects</h3>
        <div className="row">
          <Card link={proLinks} />
          <Card link={proLinks} />
          <Card link={proLinks} />
          <Card link={proLinks} />
        </div>
      </Route>
      <Route path="/about">
        <h3 id="about">About</h3>
        <About />
      </Route>
      <Route path="/blog">
        <h3> Blog to go here</h3>
      </Route>
    </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
