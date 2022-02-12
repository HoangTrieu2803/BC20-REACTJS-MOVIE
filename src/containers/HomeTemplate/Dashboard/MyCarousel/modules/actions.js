import * as ActionType from './constant';
import axios from 'axios';
import api from '../../../../../utils/apiUtils'
export const carouselAction = () =>{
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${api}/QuanLyPhim/LayDanhSachBanner`,
                TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
            });
            dispatch({
                type: ActionType.SET_CAROUSEL,
                payload: result.content.data
            });
        }catch (errors){
            console.log(errors);
        }
    }
}