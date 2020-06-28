const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');
const express = require('express');
const app = express();
//body parser
app.use(express.json());

moviesApi(app);

app.listen(config.port, ()=>{
    console.log(`Listening at http://localhost:${config.port}`);
});