const express = require('express');
const db = require('./db.js')
// const mongoose = require('mongoose');
// const config = require('config');
const Pizza = require('./models/pizzaModel.js')

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
    res.send("Server working in " +  port);
});

//this route is to check we have created pizza model correctly
app.get("/getpizzas", (req,res) => {
    // we can use docs or data
    Pizza.find({}, (err, docs)=> {
     if(err) {
         console.log(err)
     } else {
         res.send(docs)
     }    
    })
})

app.listen(port, () => `Server running on port`);

