import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get('http://127.0.0.1:5000/posts');
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post[0]} className="blog-post">
          <h3>{post[1]}</h3>
          <p>{post[2]}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
