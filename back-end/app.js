require("dotenv").config(); //importuojame dotenv

const express = require("express"); //importuojame express
const cors = require("cors");
const postsRouter = require("./routes/posts");

const app = express();

app.use(cors());
app.use(express.json());
app.use(postsRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
