import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";
export const actDetailFetch = (id) => {
  return (dispatch) => {
    //reques
    dispatch(actDetailRequest());
    // call api
    api
    .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        //success
        dispatch(actDetailSuccess(result.data.content));
      })
      .catch((error) => {
        //error
        dispatch(actDetailFailed(error));
      });
  };
};
export const actDetailRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};
export const actDetailSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};
export const actDetailFailed = (error) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: error,
  };
};
