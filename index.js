const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact-me.html"));
});

app.use( (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname + "/404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

