require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const invoicesRoutes = require ("./routes/invoice")
const app = express();
const port = 3000;
require("./db/db");

// middlewares
app.use(cors());
app.use(express.json());
// Static folder for uploaded images
app.use("/uploads", express.static("uploads"));

// Routes

app.use(authRoutes);
app.use(invoicesRoutes);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
