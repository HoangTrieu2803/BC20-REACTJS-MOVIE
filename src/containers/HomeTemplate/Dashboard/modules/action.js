import * as ActionType from'./constant';
import axios from 'axios';
export const actFetchListMovie = ()=>{
    return (dispatch)=>{
        dispatch(actListMovieRequest());
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04",
            method:"GET"
        })
        .then((result)=>{
            dispatch(actListMovieSuccess(result.data));
        })
        .catch((error)=>{
            dispatch(actListMovieFailed(error));
        })
    }
}
export const actListMovieRequest = ()=>{
    return {
        type: ActionType.LIST_MOVIE_REQUEST,
    };
};

export const actListMovieSuccess = (data) =>{
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    };
};

export const actListMovieFailed = (error) =>{
    return {
        type: ActionType.LIST_MOVIE_FAILED,
        payload:error
    };
};