const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
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

//static files
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});


//port
const port = 8080 || process.env.PORT;

//listen
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});