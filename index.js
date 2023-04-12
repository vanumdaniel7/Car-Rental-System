const express = require("express");
const path = require("path");
const db = require("./db/index.js");
const adminRoutes = require("./routes/adminRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const carRoutes = require("./routes/carRoutes.js");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/cars", carRoutes);
app.use(express.static(path.join(__dirname, "./client/build/")));
app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "./client/build/index.html"))});
db.connect().then(() => { app.listen(PORT) });