import React, { useState, useEffect } from 'react';

function PostDetail({match}) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);
  };
  
  return (
    <div className="container">
      <div className="fullPost">
        <h1>{ item.title }</h1>
        <p>{ item.body }</p>
      </div>
    </div>
  )
}

export default PostDetail;