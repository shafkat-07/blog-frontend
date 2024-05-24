import React, { useState } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
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
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Add a New Post</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
        <TextField 
          label="Post Title" 
          variant="outlined" 
          fullWidth 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          sx={{ mb: 2 }}
          required 
        />
        <TextField 
          label="Write your post here..." 
          variant="outlined" 
          fullWidth 
          multiline 
          rows={4} 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          sx={{ mb: 2 }}
          required 
        />
        <Button type="submit" variant="contained" color="primary">Add Post</Button>
      </Box>
    </Paper>
  );
};

export default PostForm;
