import * as ActionType from './constant';
import api from '../../../../../utils/apiUtils';
export const getListCinemalAction = () =>{
    return (dispatch)=>{
        api
        .get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04")
        .then((result)=>{
            dispatch({
                type: ActionType.SET_LIST_CINEMA,
                payload: result.data.content,
            });
        })
        .catch((error)=>{
            console.log(error);;
        })
    }
}