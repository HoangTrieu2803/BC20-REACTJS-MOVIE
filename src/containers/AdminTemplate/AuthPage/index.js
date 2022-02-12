import React, { useState } from "react";
import { actAuth } from "./module/action";
import { useSelector, useDispatch } from "react-redux";
function AuthPage(props) {
  const error = useSelector((state)=> state.authPageReducer.error);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actAuth(state, props.history));
  };
  const noti = () =>{
    return error && <div className="alert alert-danger">{error.response.data.content}</div>
  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>Login</h3>
            {noti()}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Username</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={handleOnChange}
                  type="password"
                  className="form-control"
                  name="matKhau"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthPage;
