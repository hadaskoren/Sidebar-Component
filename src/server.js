const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    var list = require('./sidebar.json');
    res.json(list); 
})

app.listen(3003, () => {
  console.log('REST API listening on port 3003!')
})


