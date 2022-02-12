import * as ActionType from'./constant';
import axios from 'axios';
export const actFetchListBooking = ()=>{
    return (dispatch)=>{
        dispatch(actListBookingRequest());
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=45072",
            method:"GET"
        })
        .then((result)=>{
            dispatch(actListBookingSuccess(result.data.danhSachGhe));
        })
        .catch((error)=>{
            dispatch(actListBookingFailed(error));
        })
    }
}
export const actListBookingRequest = ()=>{
    return {
        type: ActionType.LIST_BOOKING_REQUEST,
    };
};

export const actListBookingSuccess = (data) =>{
    return {
        type: ActionType.LIST_BOOKING_SUCCESS,
        payload: data,
    };
};

export const actListBookingFailed = (error) =>{
    return {
        type: ActionType.LIST_BOOKING_FAILED,
        payload:error
    };
};