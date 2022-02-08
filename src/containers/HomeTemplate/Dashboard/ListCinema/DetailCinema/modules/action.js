import * as ActionType from'./constant';
import axios from 'axios';
export const actFetchDetailCinema = ()=>{
    return (dispatch)=>{
        dispatch(actDetailCinemaRequest());
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
            method:"GET"
        })
        .then((result)=>{
            dispatch(actDetailCinemaSuccess(result.data));
        })
        .catch((error)=>{
            dispatch(actDetailCinemaFailed(error));
        })
    }
}
export const actDetailCinemaRequest = ()=>{
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST,
    };
};

export const actDetailCinemaSuccess = (data) =>{
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    };
};

export const actDetailCinemaFailed = (error) =>{
    return {
        type: ActionType.DETAIL_MOVIE_FAILED,
        payload:error
    };
};