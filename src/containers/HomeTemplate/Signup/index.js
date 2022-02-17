import React, { useState } from "react";
import { actSignUp } from "./modules/action";
import { useSelector, useDispatch } from "react-redux";
export default function SignUp(props) {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP04",
    hoTen: "",
  });
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.signupReducer.loading)
  const error = useSelector((state)=>state.signupReducer.error)
  const handleLogin = (event) =>{
    event.preventDefault();
    dispatch(actSignUp(state, props.history));
  }
  const handleOnchange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]: value,
    })
  }
  return (
    <div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h3>Sign Up</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Username</label>
                  <input onChange={handleOnchange} type="text" className="form-control" name="taiKhoan" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input onChange={handleOnchange} type="text" className="form-control" name="matKhau" />
                </div>
                <div className="form-group">
                  <label>email</label>
                  <input onChange={handleOnchange} type="email" className="form-control" name="email" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input onChange={handleOnchange} type="text" className="form-control" name="soDt" />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input onChange={handleOnchange} type="text" className="form-control" name="hoTen" />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}
