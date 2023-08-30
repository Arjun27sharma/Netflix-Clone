export const getListsStart = () => ({
    type : "GET_LISTS_START"
});
export const getListsSuccess = (lists) => ({
    type : "GET_LISTS_SUCCESS",
    payload : lists,
});
export const getListsFailure = () => ({
    type : "GET_LISTS_FAILURE"
});




// export const deleteMovieStart = () => ({
//     type : "DELETE_MOVIE_START"
// });
// export const deleteMovieSuccess = (id) => ({
//     type : "DELETE_MOVIE_SUCCESS",
//     payload : id,
// });
// export const deleteMovieFailure = () => ({
//     type : "DELETE_MOVIE_FAILURE"
// });




// export const createMoviesStart = () => ({
//     type : "CREATE_MOVIE_START"
// });
// export const createMoviesSuccess = (movie) => ({
//     type : "CREATE_MOVIE_SUCCESS",
//     payload : movie,
// });
// export const createMoviesFailure = () => ({
//     type : "CREATE_MOVIE_FAILURE"
// });




// export const updateMoviesStart = () => ({
//     type : "UPDATE_MOVIE_START"
// });
// export const updateMoviesSuccess = (movie) => ({
//     type : "UPDATE_MOVIE_SUCCESS",
//     payload : movie,
// });
// export const updateMoviesFailure = () => ({
//     type : "UPDATE_MOVIE_FAILURE"
// });