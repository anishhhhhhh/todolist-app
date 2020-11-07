const express = require("express");

const router = express.Router();
const gamesTodo = [
  { text: "Play Cyberpunk", id: 1 },
  { text: "Football with Friends", id: 2 },
  { text: "Late night Chess", id: 3 },
];

router.post("/games", (req, res) => {
  const newTodo = req.body;
  gamesTodo.push(newTodo);
  //   console.log(gamesTodo);
});

router.get("/games/new", (req, res) => {
  res.send(gamesTodo);
});

router.post("/games/delete", (req, res) => {
  const id = req.body.id;
  //   console.log(id);
  gamesTodo.map((el, index) => {
    if (el.id === id) {
      gamesTodo.splice(index, 1);
    }
  });
  //   console.log(gamesTodo);
});
module.exports = router;
