const express = require("express");
const db = require("./db/index.js");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const carRoutes = require("./routes/carRoutes.js");
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use("/cars", carRoutes);
db.connect(app, 3000);