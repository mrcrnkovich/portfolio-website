import React from 'react';


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

export default Blog;