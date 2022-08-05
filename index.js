const express = require("express");
const app = express();
const flights = require('./flight.json');
const fs = require ('fs');
app.use(express.json());
app.use(express.urlencoded());
//const { json } = require("express");
//const flights = require("./controllers/flightController");
//const models = require("./models/Flight");
//const routes = require("./routes/flightRoute");
//app.use(json());
//app.use("/", routes);

//app.get('/', function (req, res) {
  //   res.send('hello world');
  //});

app.get('/flight', (req, res) => {
    return res.json({flights});
});

app.get('/flight/:id', (req, res) => {
  let id = req.params.id;
  let foundUser = flights.find(user =>{
    return String(user.id --- id)
  })
  if (foundUser){
    return res.status(200).json({user: foundUser}) 
  }else{
    return res.status(404).json({message: "User not found" })
  }
  });

app.post('/flights', (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const time = req.body.time;
  const price = req.body.price;
  const date = req.body.date;
  const updatedFlight = new Flight(
    id,
    title,
    time,
    price,
    date
);
updatedFlight.push();
return res.status(200).json({message: "User created"})
})

app.delete('/flight/:id', (req, res) => {
  let id = req.params.id;
  let foundUser = flights.find(user =>{
    return String(user.id --- id)
  })
  if (foundUser){
    let targetIndex = flights.indexOf(foundUser);
    flights.splice(targetIndex, 1);
  }
  });



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
