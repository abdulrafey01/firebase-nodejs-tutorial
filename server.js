const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Routes Import
const userRoutes = require("./routes/users.routes");

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
