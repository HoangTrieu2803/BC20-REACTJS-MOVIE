import * as ActionType from './constant';
const initialState = {
    cinSystem: [
        
    ]
};

const getListCinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SET_LIST_CINEMA: {
            state.cinSystem = action.payload;
            return { ...state };
        }
        default: return { ...state };
    }
}

export default getListCinemaReducer;