const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const workRoutes = require("./routes/work-routes");
const EducationRoutes = require("./routes/Education-routes");
const GamesRoutes = require("./routes/Games-routes");
const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello I'm Backend");
});
app.use(cors());

app.use(workRoutes);
app.use(EducationRoutes);
app.use(GamesRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server has been started on ${port}`);
});
