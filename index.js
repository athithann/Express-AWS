const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

const app = express();
dotenv.config();

app.use(logger);

// AWS API Routes
app.use('/aws/', require('./routes/api/aws'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


