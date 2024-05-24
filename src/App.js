import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Link, Grid } from '@mui/material';
import PostForm from './PostForm';
import PostList from './PostList';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Shafkat Kabir's Personal Blog</Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'black', p: 2 }}>
          <Link href="#about" color="inherit" underline="hover" sx={{ p: 1 }}>About Me</Link>
          <Link href="#posts" color="inherit" underline="hover" sx={{ p: 1 }}>Blog Posts</Link>
          <Link href="#contact" color="inherit" underline="hover" sx={{ p: 1 }}>Contact</Link>
        </Box>
      </nav>
      <Container sx={{ mt: 4 }}>
        <section id="about" style={{ padding: '20px 0' }}>
          <Typography variant="h4" gutterBottom>About Me</Typography>
          <Typography paragraph>
            Welcome to my personal blog! My name is Shafkat Kabir. Here you will find my thoughts on various topics, my personal projects, and much more. I'm passionate about technology, programming, and basketball.
          </Typography>
          <Typography paragraph>
            I use this blog to share insights, tutorials, and stories about my journey in the tech world. Stay tuned for regular updates!
          </Typography>
        </section>
        <section id="posts" style={{ padding: '20px 0' }}>
          <Typography variant="h4" gutterBottom>Blog Posts</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <PostForm onNewPost={() => window.location.reload()} />
            </Grid>
            <Grid item xs={12} md={8}>
              <PostList />
            </Grid>
          </Grid>
        </section>
        <section id="contact" style={{ padding: '20px 0' }}>
          <Typography variant="h4" gutterBottom>Contact</Typography>
          <Typography paragraph>
            You can reach me via email at: <Link href="mailto:shafkat.kabir@example.com">shafkat.kabir@example.com</Link>
          </Typography>
        </section>
      </Container>
      <Box component="footer" sx={{ textAlign: 'center', p: 2, bgcolor: 'black', color: 'white', mt: 4 }}>
        <Typography variant="body2">&copy; 2024 Shafkat Kabir. All rights reserved.</Typography>
      </Box>
    </div>
  );
};

export default App;
