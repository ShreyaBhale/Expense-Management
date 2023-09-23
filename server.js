const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/connection');

//congig dot env file
dotenv.config();

//connect db
connectDB();

//rest pbj
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/users', require('./routes/userRoute'));
app.use('/api/v1/transactions', require('./routes/transctionRoutes'));


//port
const port = 8080 || process.env.PORT;

//listen
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});