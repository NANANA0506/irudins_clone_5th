const express = require("express");
const morgan = require("morgan");
const path = require("path");

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use("/static", express.static(path.join(__dirname, "/static")));

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(PORT, () => {
    console.log(`${PORT} EXPRESS SERVER START!`);
});