import {combineReducers} from "redux";
import listMovieReducer from "../containers/HomeTemplate/Dashboard/ListMovie/modules/reducer";
import carouselReducer from "../containers/HomeTemplate/Dashboard/MyCarousel/modules/reducer";
import listBookingReducer from "../containers/HomeTemplate/BookingTicket/modules/reducer";
import getListCinemaReducer from "../containers/HomeTemplate/Dashboard/ListCinema/modules/reducer";
const rootReducer = combineReducers ({
    listMovieReducer,
    carouselReducer,
    listBookingReducer,
    getListCinemaReducer,
})
export default rootReducer;