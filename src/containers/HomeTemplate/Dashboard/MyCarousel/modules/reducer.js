import * as ActionType from './constant';
const initialState = {
    arrImg: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
        },
    ]
};

const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SET_CAROUSEL: {
            state.arrImg = action.payload;
            return { ...state };
        }
        default: return { ...state };
    }
}

export default carouselReducer;