const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const chatgptRouter = require("./routes/chatgpt");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/chatgpt", chatgptRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
