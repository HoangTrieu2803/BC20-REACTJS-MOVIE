import React, {useState} from "react";
import { actAddUser } from "./modules/action";
import { useSelector,useDispatch } from "react-redux";
export default function AddUserPage() {
    const loading = useSelector((state)=> state.addUserReducer.loading);
    const error = useSelector((state)=> state.addUserReducer.error);
    const dispatch = useDispatch();
    const [state , setState] = useState({
        taiKhoan:"",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maNhom: "GP04",
        maLoaiNguoiDung : "KhachHang",
    })
    const handleGetInfo = (event) =>{
        const {name , value} = event.target;
        setState({
            ...state,
            [name]: value,
        });
    }
    const handleAddUser = (event) =>{
        event.preventDefault();
        dispatch(actAddUser(state));
    }
    return (
    <div>
      <form onSubmit={handleAddUser} className="container">
        <h3>Them nguoi dung</h3>
        <div className="form-group">
          <span>Tai khoan</span>
          <input onChange={handleGetInfo} className="form-control" name="taiKhoan" />
        </div>
        <div className="form-group">
          <span>Mat khau</span>
          <input onChange={handleGetInfo} className="form-control" name="matKhau" />
        </div>
        <div className="form-group">
          <span>Ho Ten</span>
          <input onChange={handleGetInfo} className="form-control" name="hoTen" />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input onChange={handleGetInfo} className="form-control" name="email" />
        </div>
        <div className="form-group">
          <span>So Dien Thoai</span>
          <input onChange={handleGetInfo} className="form-control" name="soDt" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Them nguoi dung
          </button>
        </div>
      </form>
    </div>
  );
}
