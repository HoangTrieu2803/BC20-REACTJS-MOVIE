import {combineReducers} from "redux";
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer";
const rootReducer = combineReducers ({
    detailMovieReducer,
})
export default rootReducer;