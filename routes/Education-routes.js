const express = require("express");

const router = express.Router();
const educationTodo = [
  { text: "Finish Web dev Course", id: 1 },
  { text: "Finish ML Course", id: 2 },
];

router.post("/education", (req, res) => {
  const newTodo = req.body;
  educationTodo.push(newTodo);
  //   console.log(workTodo);
});

router.get("/education/new", (req, res) => {
  res.send(educationTodo);
});

router.post("/education/delete", (req, res) => {
  const id = req.body.id;
  //   console.log(id);
  educationTodo.map((el, index) => {
    if (el.id === id) {
      educationTodo.splice(index, 1);
    }
  });
  //   console.log(educationTodo);
});
module.exports = router;
