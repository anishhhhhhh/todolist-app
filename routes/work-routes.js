const express = require("express");

const router = express.Router();
const workTodo = [
  { text: "Finish Presentaion", id: 1 },
  { text: "GYM", id: 2 },
  { text: "Relax and Bedtime", id: 3 },
];

router.post("/work", (req, res) => {
  const newTodo = req.body;
  workTodo.push(newTodo);
  console.log(workTodo);
});

router.get("/work/new", (req, res) => {
  res.send(workTodo);
});

router.post("/work/delete", (req, res) => {
  const id = req.body.id;
  //   console.log(id);
  workTodo.map((el, index) => {
    if (el.id === id) {
      workTodo.splice(index, 1);
    }
  });
  //   console.log(workTodo);
});
module.exports = router;
