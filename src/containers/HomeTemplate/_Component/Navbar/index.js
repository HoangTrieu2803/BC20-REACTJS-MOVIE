import React from 'react';

export default function Navbar() {
    return <div className="container-fluid">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark row">
            <div className="container">
                <a className="navbar-brand col-6" href="#">CyberMovie</a>
                <div className="collapse navbar-collapse col-6" >
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-success my-2 my-sm-0 mx-1">Đăng nhập</button>
                        <button className="btn btn-outline-success my-2 my-sm-0 mx-1">Đăng ký</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>;
}
