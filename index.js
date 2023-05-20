const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const coursesApi = require("./data/coursesData.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/allCoursesApi/", (req, res) => {
  res.send(coursesApi);
});

app.get("/allCoursesApi/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const api = coursesApi.find((apiById) => apiById.id === id);
  res.send(api);
});

app.listen(port, () => {
  console.log("Mr code is running on port");
});
