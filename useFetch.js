import { useEffect, useState } from 'react';

export default function useFetch(url){
  const [data, setData] = useState(null);
  useEffect(() => {
    async function loadData(){
        const resp = await fetch(url);
        if(!resp.ok) {
          return;
        }
        
        const posts = await resp.json();
        setData(posts);
    }

    loadData();
  }, [url]);

  return data;
}
