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

const diaries = [
  { id: 1, title: "First Diary", content: "This is the first Diary" },
  { id: 2, title: "Second Diary", content: "This is the second Diary" },
];

//Get all diaries
app.get("/", (req, res) => {
  res.json(diaries);
});

//Get a single diary
app.get("/diary/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foundDiary = diaries.find((diary) => diary.id === id);

  if (foundDiary) {
    res.json(foundDiary);
  } else {
    res.status(404).json({ error: "Diary not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
