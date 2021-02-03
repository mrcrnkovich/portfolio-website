import React from 'react';

function ListLinkNewTab(props){
    return props.items.map((item)=>
      (<li>
        <a target="_blank" rel="noreferrer noopener" href={item.link}>
        {item.name}
        </a>
      </li>));
}

export default ListLinkNewTab;