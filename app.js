const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const cookieparser = require("cookie-parser");
const connectToDB = require("./config/db");

dotenv.config();
connectToDB();

const app = express();
const userRouter = require("./routes/user.routes");
const indexRouter = require("./routes/index.routes");

const PORT = 3000;

// View engine setup
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

// Configure session middleware
app.use(
  session({
    secret: "your-secret-key", // Replace with a secure key for session encryption
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Use `secure: true` in production with HTTPS
  })
);

// Routes
app.use("/", indexRouter);
app.use("/user", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
