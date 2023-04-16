const express = require("express");
const path = require("path");
const db = require("./db/index.js");
const adminRoutes = require("./routes/adminRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const carRoutes = require("./routes/carRoutes.js");
const app = express();

const startApp = async () => {
    await db.connect();
    app.listen(3000);
}
app.use(express.json());
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use("/cars", carRoutes);
app.use(express.static(path.join(__dirname, "./client/build/")));
app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "./client/build/index.html"))});
startApp();