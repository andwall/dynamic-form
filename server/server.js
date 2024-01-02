/* Responsible for init server and connecting to MongoDB */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config('./.env');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()) //use json format

const uri = process.env.ATLAS_URI;
//connect to mongo
mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch(err => {
    console.log(err);
  });

const casesRouter = require('./routes/casesRouter');
app.use('/cases', casesRouter);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
})

