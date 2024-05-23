import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

const App = () => {
  return (
    <div>
      <header>
        <h1>Shafkat Kabir's Personal Blog</h1>
      </header>
      <nav>
        <a href="#about">About Me</a>
        <a href="#posts">Blog Posts</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="about">
        <h2>About Me</h2>
        <p>Welcome to my personal blog! My name is Shafkat Kabir. Here you will find my thoughts on various topics, my personal projects, and much more.</p>
      </section>
      <section id="posts">
        <h2>Blog Posts</h2>
        <PostForm onNewPost={() => window.location.reload()} />
        <PostList />
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me via email at: <a href="mailto:shafkat.kabir@example.com">shafkat.kabir@example.com</a></p>
      </section>
      <footer>
        <p>&copy; 2024 Shafkat Kabir. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
