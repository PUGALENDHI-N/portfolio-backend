const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running 🚀");
});

const contactRoute = require("./routes/contact");

app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});