import * as ActionType from'./constant';
import axios from 'axios';
export const actFetchCinemaSystem = ()=>{
    return (dispatch)=>{
        dispatch(actCinemaSystemRequest());
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
            method:"GET"
        })
        .then((result)=>{
            dispatch(actCinemaSystemSuccess(result.data));
        })
        .catch((error)=>{
            dispatch(actCinemaSystemFailed(error));
        })
    }
}
export const actCinemaSystemRequest = ()=>{
    return {
        type: ActionType.CINEMA_SYSTEM_REQUEST,
    };
};

export const actCinemaSystemSuccess = (data) =>{
    return {
        type: ActionType.CINEMA_SYSTEM_SUCCESS,
        payload: data,
    };
};

export const actCinemaSystemFailed = (error) =>{
    return {
        type: ActionType.CINEMA_SYSTEM_FAILED,
        payload:error
    };
};