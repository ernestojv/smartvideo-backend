const { request } = require("express");

const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');
const { exception } = require("console");

describe('service-movies', () => {
    const MoviesServices = proxyquire('../services/movies', {'../lib/mongo':MongoLibMock});
    const moviesService = new MoviesServices();

    describe('when getMovies is called', async () => {
        it('should call the getall MongoLib method ', async ()=>{
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('shoul return an array of movies', async()=>{
            const result = await moviesService.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        });
        
    });
});