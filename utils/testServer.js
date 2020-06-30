const express = require('express');
const superttest = require('supertest');

function testServer(route) {
    const app = express();
    app.use(express.json())
    route(app);
    return superttest(app);
}

module.exports = testServer;