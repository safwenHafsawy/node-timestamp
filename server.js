const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

const stampRoute = require("./routes/stampRoute");
app.use("/api", stampRoute);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 80, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
