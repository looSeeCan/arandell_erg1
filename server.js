const express = require("express");
const app = express();
const path = require("path");

const port = 3001;

app.use(express.static(path.join(__dirname, "public"))); ///had to do this for <script> tag

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
