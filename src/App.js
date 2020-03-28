import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import foto from './foto.jpg';

const about = 
{
  "data": [
    "Michael is a certified public accountant, interested in web development and data engineering. Michael has experience working with Python for web development using Flask, and for data analysis using Pandas and Dash. He also has experience using SQL in Postgres and SQLite. This website was built using ReactJS.",
    "In his spare time he enjoys guitar, coffee, and long bike rides on the beach.",
    "I'm interested in networking and full stack engineering as well as data engineering roles."
  ]
};

function About(props){
  const pic = <img id="about-foto" src={props.foto} alt="Not Found"></img>;
  const para = props.data.map((paragraph)=>(<p>{paragraph}</p>));

  return (
      <div>
        <h3 id="about" className="sectionHeader">About</h3>
        <div className="about">
          {pic}
          <div>
            {para}
          </div>
        </div>
      </div>
    );
}

function Projects(props){
  return (
        <div className="row">
          <Card data={props.links} />
          <Card data={props.links} />
          <Card data={props.links} />
          <Card data={props.links} />
        </div>);
}

function Card(props){
  return (
    <div className="card">
      <a href={props.data.link}>
        <img className="thumbnail" src={foto} alt="missing file" />
        <h4>{props.data.name}</h4>
        <p>This is a description of the project</p>
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
  
  const proLinks = {link:"https://www.github.com/mrcrnkovich", name:"CRM"};
  const name ="about";
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
              <Projects links={proLinks} />
            </Route>
            <Route path={"/"+name}>
              <About foto={foto} data={about.data}/>
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
