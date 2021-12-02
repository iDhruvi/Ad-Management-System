require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURL).then(() => console.log("MongoDB Connected.."));

const PublisherRouter = require("./Routes/PublisherRoute");
const AdRouter = require("./Routes/AdRoute");

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/Publisher', PublisherRouter);

app.use('/Ad', AdRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));