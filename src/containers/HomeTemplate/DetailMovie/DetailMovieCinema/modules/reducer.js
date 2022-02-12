import * as ActionType from "./constants";
const initalState ={
    loading: false,
    data: null,
    error : null,
}
const detailMovieCinemaReducer = (state =initalState, action) =>{
    switch (action.type) {
        case ActionType.DETAIL_MOVIE_CINEMA_REQUEST:
        {
            state.loading =true;
            state.data = null;
            state.error = null;
            return{...state}
        }
        case ActionType.DETAIL_MOVIE_CINEMA_SUCCESS:{
            state.loading= false;
            state.data = action.payload;
            state.error = null;
            return{...state}
        }
        case ActionType.DETAIL_MOVIE_CINEMA_FAILED:{
            state.loading= false;
            state.data = null;
            state.error = action.payload;
            return{...state}
        }
        default:
            return{...state};
    }
}

export default detailMovieCinemaReducer;