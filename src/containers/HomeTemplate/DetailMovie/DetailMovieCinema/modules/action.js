import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";
export const actDetailMovieCinemaFetch = (id) => {
  return (dispatch) => {
    //reques
    dispatch(actDetailCinemaRequest());
    // call api
    api
    .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => {
        //success
        dispatch(actDetailCinemaSuccess(result.data.content));
      })
      .catch((error) => {
        //error
        dispatch(actDetailCinemaFailed(error));
      });
  };
};
export const actDetailCinemaRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_CINEMA_REQUEST,
  };
};
export const actDetailCinemaSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_CINEMA_SUCCESS,
    payload: data,
  };
};
export const actDetailCinemaFailed = (error) => {
  return {
    type: ActionType.DETAIL_MOVIE_CINEMA_FAILED,
    payload: error,
  };
};
