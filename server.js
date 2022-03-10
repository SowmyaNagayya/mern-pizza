const express = require('express');
// const mongoose = require('mongoose');
// const config = require('config');

const app = express();
const port = process.env.PORT || 5000;

//body parser
app.use(express.json());

// const db = config.get("mongoURI");

// mongoose
//   .connect(db)
//   .then(() => console.log("Mongodb Connected"))
//   .catch(err => console.error(err));

//homepage in server side
app.get("/", (req, res) => {
    res.send("Server working");
});

app.listen(port, () => `Server running on port`);

