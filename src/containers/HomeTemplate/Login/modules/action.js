import * as ActionType from "./constants"
import axios from "axios"
export const actLogin =(user,history) =>{
    return(dispatch) =>{
        dispatch(actLoginRequest());
        axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method:"POST",
            data:user,
        })
        .then((result)=>{
            if(result.data.maLoaiNguoiDung == "QuanTri"){
                return Promise.reject(
                );
            }
            localStorage.setItem("User",JSON.stringify(result.data));
            history.replace("/")
            dispatch(actLoginSuccess(result.data))
        })
        .catch((error)=>{
            dispatch(actLoginFailed(error))
        })
    }
}
export const actLoginRequest = () => {
    return {
        type: ActionType.LOGIN_REQUEST,
    }
}
export const actLoginSuccess = (data) => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
    }
}
export const actLoginFailed = (error) => {
    return {
        type: ActionType.LOGIN_FAILED,
        payload:error,
    }
}