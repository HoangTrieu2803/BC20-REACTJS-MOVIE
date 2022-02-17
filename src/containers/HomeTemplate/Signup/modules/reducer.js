import * as ActionType from "./constants"
const initalState={
    loading:false,
    data:null,
    error:null,
}
const signupReducer = (state=initalState, action )=>{
    switch (action.type) {
        case ActionType.SIGN_UP_REQUEST:
            {
                state.loading = true;
                state.data = null;
                state.error=null;
                return {...state}
            }
        case ActionType.SIGN_UP_SUCCESS:
            {
                state.loading = false;
                state.data = action.payload;
                state.error=null;
                return {...state}
            }
        case ActionType.SIGN_UP_FAILED:
            {
                state.loading = false;
                state.data = null;
                state.error=action.payload;
                return {...state}
            }
            break;
    
        default:
            return {...state};
    }
}
export default signupReducer;