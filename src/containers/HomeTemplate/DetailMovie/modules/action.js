import * as ActionType from "./constants";
import { axios } from "axios";
export const actDetailFetch = (id) => {
    return (dispatch) => {
        //reques
        dispatch(actDetailRequest());
        // call api
        axios({
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
            method: "GET",
        })
            .then((result) => {
                //success
                dispatch(actDetailSuccess(result.data.content));
            })
            .catch((error) => {
                //error
                dispatch(actDetailFailed(error));
            })
    }
}
export const actDetailRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST,
    }
}
export const actDetailSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    }
}
export const actDetailFailed = (error) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAILED,
        payload: error,
    }
}
