const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParse = require("cookie-parser");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParse());

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

const db = process.env.DATABASE;
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connect to database successfully");
  }
);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
