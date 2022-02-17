import * as ActionType from "./constants"
import api from "../../../../utils/apiUtils"
export const actLogin =(user,history) =>{
    return(dispatch) =>{
        dispatch(actLoginRequest());
        api.post("QuanLyNguoiDung/DangNhap",user)
        .then((result)=>{
            if(result.data.content.maLoaiNguoiDung == "QuanTri"){
                return Promise.reject(
                    {
                        response: {
                            data:{
                                content:"khong co quyen truy cap"
                            },
                        }
                    }
                );
            }
            localStorage.setItem("User",JSON.stringify(result.data.content));
            history.replace("/")
            dispatch(actLoginSuccess(result.data.content))
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