import {combineReducers} from "redux";
import listMovieReducer from "../containers/HomeTemplate/Dashboard/ListMovie/modules/reducer";
import carouselReducer from "../containers/HomeTemplate/Dashboard/MyCarousel/modules/reducer";
import listBookingReducer from "../containers/HomeTemplate/BookingTicket/modules/reducer";
import getListCinemaReducer from "../containers/HomeTemplate/Dashboard/ListCinema/modules/reducer";
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer";
import loginReducer from "../containers/HomeTemplate/Login/modules/reducer";
import detailMovieCinemaReducer from "../containers/HomeTemplate/DetailMovie/DetailMovieCinema/modules/reducer";
const rootReducer = combineReducers ({
    listMovieReducer,
    carouselReducer,
    listBookingReducer,
    getListCinemaReducer,
    detailMovieReducer,
    loginReducer,
    detailMovieCinemaReducer,
})
export default rootReducer;