const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit', async (req, res) => {
  try {
    const response = await axios.post('http://backend:5000/submit', req.body);
    res.send(response.data);
  } catch (err) {
    res.status(500).send('Error submitting to backend');
  }
});

app.listen(3000, () => {
  console.log('Frontend server running on http://localhost:3000');
});
