import * as ActionType from "./constants"
import api from "../../../../utils/apiUtils";
export const actAuth = (user , history) =>{
    return(dispatch) =>{
        dispatch(actAuthRequest());
        api.post("QuanLyNguoiDung/DangNhap", user)
        .then((result)=>{
            if(result.data.content.maLoaiNguoiDung === "KhachHang"){
                return Promise.reject({
                    response: {
                        data:{
                            content:"khong co quyen truy cap"
                        },
                    }
                });
            }
            localStorage.setItem("UserAdmin",JSON.stringify(result.data.content));
            history.replace("/add-user")
            dispatch(actAuthSuccess(result.data.content));
        })
        .catch((error)=>{
            dispatch(actAuthFailed(error));
        })  
    }
}
const actAuthRequest = () =>{
    return{
        type: ActionType.AUTH_REQUEST,
    }
}
const actAuthSuccess = (data) =>{
    return{
        type:ActionType.AUTH_SUCCESS,
        payload: data
    }
}
const actAuthFailed = (error) =>{
    return{
        type:ActionType.AUTH_FAILED,
        payload:error,
    }
}