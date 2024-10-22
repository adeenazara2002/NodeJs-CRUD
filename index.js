const express = require("express");
const posts = require("./data/posts");
const comments = require("./data/comments");
const albums = require("./data/albums");
const photos = require("./data/photos");
const todos = require("./data/todos");
const users = require("./data/users");

const app = express();
const PORT = 3000;

app.use(express.json());

// HTML

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to JSONPlaceholder Clone</h1>
    <ul>
      <li><a href="/posts">/posts</a> - View all posts</li>
      <li><a href="/comments">/comments</a> - View all comments</li>
      <li><a href="/albums">/albums</a> - View all albums</li>
      <li><a href="/photos">/photos</a> - View all photos</li>
      <li><a href="/todos">/todos</a> - View all todos</li>
      <li><a href="/users">/users</a> - View all users</li>
    </ul>
  `);
});

// HTML Ended

// Routes

// POSTS
// GET

app.get("/posts", (req, res) => {
  return res.json(posts);
});

// POST

app.post("/posts", (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// DELETE

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(200).json({ message: "Post deleted successfully" });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// PUT

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));

  if (postIndex !== -1) {
    posts[postIndex] = { id: parseInt(id), ...req.body };
    res.status(200).json(posts[postIndex]);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// COMMENTS
// GET

app.get("/comments", (req, res) => {
  return res.json(comments);
});

// POST

app.post("/comments", (req, res) => {
  const newComments = { id: posts.length + 1, ...req.body };
  comments.push(newComments);
  res.status(201).json(newComments);
});

// DELETE

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1);
    res.status(200).json({ message: "Comment deleted successfully" });
  } else {
    res.status(404).json({ message: "Comment not found" });
  }
});

// PUT

app.put("/comments/:id", (req, res) => {
  const { id } = req.params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  if (commentIndex !== -1) {
    posts[commentIndex] = { id: parseInt(id), ...req.body };
    res.status(200).json(comments[commentIndex]);
  } else {
    res.status(404).json({ message: "Comment not found" });
  }
});

// ALBUMS
// GET

app.get("/albums", (req, res) => {
  return res.json(albums);
});

// POST

app.post("/albums", (req, res) => {
  const newAlbums = { id: albums.length + 1, ...req.body };
  albums.push(newAlbums);
  res.status(201).json(newAlbums);
});

// DELETE

app.delete("/albums/:id", (req, res) => {
  const { id } = req.params;
  const albumIndex = albums.findIndex((album) => album.id === parseInt(id));

  if (albumIndex !== -1) {
    albums.splice(albumIndex, 1);
    res.status(200).json({ message: "Album deleted successfully" });
  } else {
    res.status(404).json({ message: "Album not found" });
  }
});

// PUT

app.put("/albums/:id", (req, res) => {
  const { id } = req.params;
  const albumIndex = albums.findIndex((album) => album.id === parseInt(id));

  if (albumIndex !== -1) {
    albums[albumIndex] = { id: parseInt(id), ...req.body };
    res.status(200).json(albums[albumIndex]);
  } else {
    res.status(404).json({ message: "Album not found" });
  }
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
