import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import ListLinkNewTab from './components/ListLinkTab';
import Projects from  './pages/Projects';
import foto from './background.jpg';
import useFetch from './useFetch.js';

const url = "http://mcrnkovich.io/blog/wp-json/wp/v2/";

const internalLinks = [
    {link:"/", name:"Home"},
    {link:"/blog", name:"Blog"},
    {link:"/projects", name:"Projects"} ];
  const links = [{link:"https://www.github.com/mrcrnkovich", name:"GitHub"},
                  {link:"https://www.linkedin.com/in/michaelcrnkovich", name:"LinkedIn"}]

  const HeaderLinks = (
              <ul id="menu">
                <ListLink items={internalLinks} />
                <ListLinkNewTab items={links} />
              </ul>);
  
  const proLinks = {link:"https://www.github.com/mrcrnkovich", name:"CRM"};
 

function About(props){
  const pic = <div className="about-foto"><img className="about-foto shadow" src={props.foto} alt="Not Found" /></div>;
  const [about, isLoading] = useFetch(url+"pages/7", { content:{ rendered:"" }});
  
  return (
      <div>
        <div id="about-heading" className="about">
        <h2 className=""> Hi, my name is Mike. I am full stack software developer interested in all things coffee related.</h2>
        </div>
        {pic}
        <div className="about">
          <div>
            {isLoading ? (<p>Loading...</p>):
              (<p className="load" dangerouslySetInnerHTML={{__html: about.content.rendered}}></p>)}
          </div>
          <p><a href="/projects">Learn more...</a></p>
        </div>
      </div>
    );
}

function Blog(props){

  const [count, setCount] = useState(0);
  const [posts, isLoading] = useFetch(url+"posts",[{content:{rendered:""},
                                        title:{rendered:"Loading"},link:"#"}] );
  posts.map( (p)=>( { name:p.title.rendered, link:p.link} ));
  
  return (  
      <div className="blog">
        <div className="blog-header">
          <SideBar items={ posts.map( (p)=> ({ name:p.title.rendered,link:p.link })) } />
          <h2 dangerouslySetInnerHTML={{__html: posts[count].title.rendered }}></h2>
        </div>
        <div className="blog-content">
          <div dangerouslySetInnerHTML={{__html: posts[count].content.rendered }}></div>
        </div>
        <div className="row blog-arrows">
          <button onClick={ 
                  ()=> {
                    count<=0 ? 
                      setCount(posts.length-1):
                      setCount(count-1)
                  }}>Previous</button>
          <button onClick={ 
                  ()=> {
                    count>=posts.length-1 ?
                      setCount(0):
                      setCount(count+1)
                  }}>Next</button>
        </div>
      </div>
    );
}

function SideBar(props){
  return (
      <div className="side-bar">
        <ul>
          <ListLink items={props.items} />
        </ul>
      </div>
  );
}





function ListLink(props){
    return props.items.map((item)=>
      (<li>
        <a href={item.link}> 
        {item.name}
        </a>
      </li>));
}

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



function App() {
 return (
    <Router>
      <div className="app">
        <TopNav HeaderLinks={HeaderLinks} />
        <div id="content">
          <Switch>
            <Route exact path="/">
              <About foto={foto} />
            </Route>
            <Route path="/projects">
              <Projects links={proLinks} />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
