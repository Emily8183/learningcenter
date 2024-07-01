import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cors from "cors";

const app = express();
const port = 3000;
// this is the server end to deal with the API

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend-react/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let diaries = [
  { id: 1, title: "First Diary", content: "This is the first Diary" },
  { id: 2, title: "Second Diary", content: "This is the second Diary" },
];

//Get all diaries
app.get("/", (req, res) => {
  res.json(diaries);
});

//Get a single diary
app.get("/diaries/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foundDiary = diaries.find((diary) => diary.id === id);

  if (foundDiary) {
    res.json(foundDiary);
  } else {
    res.status(404).json({ error: "Diary not found" });
  }
});

//Post a new diary
app.post("/diaries", (req, res) => {
  const { title, content } = req.body;

  const newDiary = { id: diaries.length + 1, title, content };

  diaries.push(newDiary);

  res.status(201).json(newDiary);
});

//PUT(replace the entire existing diary with a new one)
app.put("/diaries/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const diary = diaries.find((diary) => diary.id === id);

  if (diary) {
    diary.title = title || diary.title;
    diary.content = content || diary.content;
    res.json(diary);
  } else {
    res.status(404).json({ message: "Diary not found" });
  }
});

//DELETE a diary
app.delete("/diaries/:id", (req, res) => {
  const id = parseInt(req.params.id);

  diaries = diaries.filter((diary) => diary.id !== id);

  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
