import { useEffect, useState } from 'react';

export default function useFetch(url, initalData){
  const [data, setData] = useState(initalData);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData(){
        setLoading(true);

        const resp = await fetch(url);
        if(!resp.ok) {
          return;
        }
        
        const posts = await resp.json();
        setData(posts);
        setLoading(false);
    }

    loadData();
  }, [url]);

  return  [data, isLoading];
}
