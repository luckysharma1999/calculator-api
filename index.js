import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("welcome to calaculator");
});
app.get("/add", (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.get("/sub", (req, res) => {
  const { a, b } = req.query;
  const sub = parseInt(a) - parseInt(b);
  res.send(`The sub of ${a} and ${b} is ${sub}`);
});

app.get("/mul", (req, res) => {
  const { a, b } = req.query;
  const mul = parseInt(a) * parseInt(b);
  res.send(`The mul of ${a} and ${b} is ${mul}`);
});
app.get("/div", (req, res) => {
  const { a, b } = req.query;
  const div = parseInt(a) / parseInt(b);
  res.send(`The div of ${a} and ${b} is ${div}`);
});
app.get("/mod", (req, res) => {
  const { a, b } = req.query;
  const mod = parseInt(a) % parseInt(b);
  res.send(`The mod of ${a} and ${b} is ${mod}`);
});
app.get("/pow", (req, res) => {
  const { a, b } = req.query;
  const pow = Math.pow(parseInt(a), parseInt(b));
  res.send(`The pow of ${a} and ${b} is ${pow}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
