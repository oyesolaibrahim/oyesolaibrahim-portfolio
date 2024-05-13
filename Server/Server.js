const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

const corsConfig = {
    origin: true,
    credentials: true,
    allowHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "Authorization",
      "Access-Control-Allow-Origin",
      "access-control-allow-Origin"
    ]
  }
  
  app.use(cors(corsConfig));

const  sentMessageToGmail  = require("./Controllers/gmail.controller");

app.post('/api/sendmessage', sentMessageToGmail);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
