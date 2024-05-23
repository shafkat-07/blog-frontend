import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ onNewPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      const response = await axios.post('http://127.0.0.1:5000/add', { title, content });
      if (response.status === 201) {
        onNewPost();
        setTitle('');
        setContent('');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Post Title" 
        required 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Write your post here..." 
        required 
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
