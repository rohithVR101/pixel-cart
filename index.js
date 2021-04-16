const express = require("express");
const app = express();

const users = [];

app.use(express.json());
app.use(express.static(process.cwd() + "/my-app/dist/pixel-cart/"));

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get("/", (req, res) => {
  res.sendFile(
    process.cwd() + "/my-app/dist/pixel-cart/index.html"
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on the port::${port}`);
});
