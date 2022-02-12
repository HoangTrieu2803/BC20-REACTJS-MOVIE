import { CinemaInfo } from '../../../../_core/models/CinemeInfo';
import * as ActionType from './constant';
const initialState = {
    detail: new CinemaInfo(),
    danhSachGheDangDat: []
};

const listBookingReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionType.LIST_BOOKING_REQUEST:{
            state.detail = action.detail;
            return {...state};
        }
        case ActionType.LIST_BOOKING_TICKET:{
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
            if(index != -1){
                danhSachGheCapNhat.splice(index,1);
            }else{
                danhSachGheCapNhat.push(action.gheDuocChon);
            }
            console.log(action);
            return {...state, danhSachGheDangDat: danhSachGheCapNhat};
        }
        default:    return {...state};
    }
}

export default listBookingReducer;