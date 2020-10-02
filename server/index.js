const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();

app.use(helmet());
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use('/', routes)
app.get('/', (req, res) => {
  res.send("Welcome to the API-SERVER for cc_vault demo api");
})

app.listen(3001, () => {
  console.log(`listening on port 3001`)
})