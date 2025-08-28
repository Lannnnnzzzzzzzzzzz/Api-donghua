const express = require("express");
const cors = require("cors");

const donghuaRoutes = require("./routes/donghua");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/donghua", donghuaRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Anichin Donghua API" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});