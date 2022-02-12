import {combineReducers} from "redux";
import listMovieReducer from "../containers/HomeTemplate/Dashboard/modules/reducer";
import cinemaSystemReducer from "../containers/HomeTemplate/Dashboard/ListCinema/CinemaSystem/modules/reducer";
import detailCinemaReducer from "../containers/HomeTemplate/Dashboard/ListCinema/DetailCinema/modules/reducer";
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer";
import loginReducer from "../containers/HomeTemplate/Login/modules/reducer";
const rootReducer = combineReducers ({
    listMovieReducer,
    cinemaSystemReducer,
    detailCinemaReducer,
    detailMovieReducer,
    loginReducer
})
export default rootReducer;