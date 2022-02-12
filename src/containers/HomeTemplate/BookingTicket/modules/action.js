import * as ActionType from'./constant';
import api from "../../../../utils/apiUtils";
import { ThongTinDatVe } from '../../../../_core/models/ThongTinDatVe';
export const actFetchListBooking = ()=>{
    return (dispatch)=>{
        api
        .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=17074`)
        .then((result)=>{
            dispatch({
                type: ActionType.LIST_BOOKING_REQUEST,
                detail: result.data.content
            });
        })
    }
}

export const actBookingTicket = (thongTinDatVe = new ThongTinDatVe()) =>{
    return dispatch =>{
        api
        .post("QuanLyDatVe/DatVe", thongTinDatVe)
        .then(result =>{
            dispatch({
                type: ActionType.BOOKING_TICKET_SUCCESS,
            })
            console.log(result)
            }
        )
        .catch(error => console.log(error))
    }
}