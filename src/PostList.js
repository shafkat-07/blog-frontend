import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
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
    <Box>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">{post.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostList;
