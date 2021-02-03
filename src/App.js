/*--------------------------------------------------------------------------------/

    Returns a React Router, which acts as the main entry point to the portfolio
    website. 

    Current Pages include:
        
          1. About Section
          2. Access to Blog (hosted with Wordpress)
          3. A List of projects and descriptions.

/--------------------------------------------------------------------------------*/

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ListLink from './components/ListLink';
import ListLinkNewTab from './components/ListLinkTab';
import TopNav from './components/TopNav';
import Projects from  './pages/Projects';


//    Section of constant links, etc. May get moved soon.

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
