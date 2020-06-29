const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');
const express = require('express');
const app = express();
const {logErrors, errorHandler, wrapErrors} = require('./utils/middleware/errorHandlers.js');
const notFoundHandler = require('./utils/middleware/notFoundHandler.js');
//body parser
app.use(express.json());
//Routes
moviesApi(app);

//Catch 404 error
app.use(notFoundHandler);

//Errors Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, ()=>{
    console.log(`Listening at http://localhost:${config.port}`);
});