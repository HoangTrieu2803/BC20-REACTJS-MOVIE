import * as ActionType from "./constants"
import api from "../../../../utils/apiUtils";
export const actSignUp = (user,history) =>{
    return(dispatch) =>{
        dispatch(actSignUpRequest());
        api.post("QuanLyNguoiDung/DangKy",user)
        .then((result)=>{
            dispatch(actSignUpSuccess(result.data.content))
            alert("dang ky thanh cong")
            history.replace("/login")
        })
        .catch((error)=>{
            dispatch(actSignUpFailed(error))
        })
    }
}
export const actSignUpRequest = () => {
    return {
        type: ActionType.SIGN_UP_REQUEST,
    }
}
export const actSignUpSuccess = (data) => {
    return {
        type: ActionType.SIGN_UP_SUCCESS,
        payload: data,
    }
}
export const actSignUpFailed = (error) => {
    return {
        type: ActionType.SIGN_UP_FAILED,
        payload:error,
    }
}