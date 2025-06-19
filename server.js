const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Removed OpenAI related code as per user request

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
