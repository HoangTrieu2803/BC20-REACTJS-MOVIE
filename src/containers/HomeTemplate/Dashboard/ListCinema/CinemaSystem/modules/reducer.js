import * as ActionType from './constant';
const initialState = {
    loading: false,
    data: null,
    error: null,
};
const cinemaSystemReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionType.CINEMA_SYSTEM_REQUEST:{
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};
        }
        case ActionType.CINEMA_SYSTEM_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state};
        }
        case ActionType.CINEMA_SYSTEM_FAILED:{
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state};    
        }
        default:    return {...state};
    }
}

export default cinemaSystemReducer;