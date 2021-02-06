import React from 'react';
import useFetch from '../useFetch';


function About(props){
  const url = "http://mcrnkovich.io/blog/wp-json/wp/v2/";
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

export default About;
