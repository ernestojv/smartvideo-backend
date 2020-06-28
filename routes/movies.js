const express = require('express');
const MoviesService = require('../services/movies');
//GET
function moviesApi(app){
    const router = express.Router();
    app.use("/api/movies", router);

    const moviesServie = new MoviesService();

    router.get("/", async (request, response, next)=>{
        const { tags } = request.query;
        try {
            const movies = await moviesServie.getMovies({ tags });
            response.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch (error) {
            next(error)
        }
    });

//GET id

    router.get("/:movieId", async (request, response, next)=>{
        const {movieId} = request.params;
        try {
            const movies = await moviesServie.getMovie({ movieId });
            response.status(200).json({
                data: movies,
                message: 'movie retrieved'
            })
        } catch (error) {
            next(error)
        }
    });

//POST

    router.post("/", async (request, response, next)=>{
        const {body: movie} = request;
        try {
            const createMovieId = await moviesServie.createMovie({ movie });
            response.status(201).json({
                data: createMovieId,
                message: 'movie created'
            })
        } catch (error) {
            next(error)
        }
    });

//PUT

    router.put("/:movieId", async (request, response, next)=>{
        const {movieId} = request.params;
        const {body: movie} = request;
        try {
            const updatedMovieId = await moviesServie.updateMovie({movieId, movie});
            response.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            })
        } catch (error) {
            next(error)
        }
    });

//DELETE


    router.delete("/:movieId", async (request, response, next)=>{
        const {movieId} = request.params;
        try {
            const deletedMovieId = await moviesServie.deleteMovie({movieId});
            response.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            })
        } catch (error) {
            next(error)
        }
    });

//PATCH
router.patch("/:movieId", async (request, response, next)=>{
    const {movieId} = request.params;
    const {body: movie} = request;
    try {
        const remplacedMovieId = await moviesServie.remplaceMovie({movieId, movie});
        response.status(200).json({
            data: remplacedMovieId,
            message: 'movie remplaced'
        })
    } catch (error) {
        next(error)
    }
});
}
module.exports = moviesApi;