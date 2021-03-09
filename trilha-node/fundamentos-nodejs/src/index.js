const express = require("express");

const app = express();

app.use(express.json());

const courses = [
  "Curso 1",
  "Curso 2",
  "Curso 3",
  "Curso 4",
  "Curso 5",
  "Curso 6",
];

app.get("/courses", (_req, res) => {
  res.json(courses);
});

app.post("/courses", (req, res) => {
  const { course } = req.body;

  courses.push(course);

  res.json(courses);
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;

  courses.split(course, "");

  res.json(courses);
});

app.patch("/courses/:id", (req, res) => {
  const { id } = req.params;

  courses.push(course);

  res.json(courses);
});

app.delete("/courses/:id", (req, res) => {
  const { id } = req.params;

  courses.push(course);

  res.json(courses);
});

app.listen(3030);
