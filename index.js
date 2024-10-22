const express = require("express");
const posts = require("./data/posts"); 
const app = express();
const PORT = 3000;

app.use(express.json()); 

// Routes
// GET

app.get("/posts", (req, res) => {
  return res.json(posts); 
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
