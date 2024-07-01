import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cors from "cors";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend-react/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [
  { id: 1, title: "First Post", content: "This is the first post" },
  { id: 2, title: "Second Post", content: "This is the second post" },
];

app.get("/", (req, res) => {
  res.json(posts);
});

// app.get("/post/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const foundPost = posts.find((post) => post.id === id);

//   if (foundPost) {
//     res.json(foundPost);
//   } else {
//     res.status(404).json({ error: "Post not found" });
//   }
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
