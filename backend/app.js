const express = require('express');
const cors = require('cors');
const routes = require('./routes/registerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
