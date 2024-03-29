const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES_START":
            return {
                movies: [],
                isFetching: true,
                error: false
            }
        case "GET_MOVIES_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_MOVIES_FAILURE":
            return {
                movies: [],
                isFetching: false,
                error: true
            }



        case "CERATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "CERATE_MOVIE_SUCCESS":
            return {
                movies: [...state.movies, action.payload],
                isFetching: false,
                error: false
            }
        case "CERATE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }





        case "UPDATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "UPDATE_MOVIE_SUCCESS":
            return {
                movies: state.movies.map((movie) => movie._id === action.payload._id && action.payload),
                isFetching: false,
                error: false
            }
        case "UPDATE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }



        case "DELETE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_MOVIE_SUCCESS":
            return {
                movies: state.movies.filter((movies) => movies._id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}

export default MovieReducer