//imports in backend are used via require and are necessary variable declarations
require('dotenv').config(); // 
require('./config/mongoose.config'); //
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors()); // implements cors to express
app.use(express.json()); // telling us to use json
app.use(express.urlencoded({extend: true})); 


require('./routes/product.routes')(app); // requires our routes

app.listen(port, () => console.log(`Listening on port: ${port}`) ); // runs application