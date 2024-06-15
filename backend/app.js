const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const items = require('./routes/items');

const app = express();

// Gunakan middleware CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use('/items', items);

// Mulai server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
