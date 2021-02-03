import React from 'react';

function ListLink(props){
    return props.items.map((item)=>
      (<li>
        <a href={item.link}> 
        {item.name}
        </a>
      </li>));
}

export default ListLink;