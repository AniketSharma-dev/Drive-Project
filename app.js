const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require("./config/db");
connectToDB();


const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on localhost:${PORT}`);
});
