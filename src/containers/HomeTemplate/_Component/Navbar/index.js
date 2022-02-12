import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector  } from 'react-redux';
export default function Navbar() {
    const user = useSelector((state) => state.loginReducer.data)
    const handleLogout = () =>{
        localStorage.clear();
    }
    if(user){
        localStorage.setItem("Name",JSON.stringify(user.hoTen));
    }
    if(localStorage.getItem("User") && localStorage.getItem("Name")){
        const name = localStorage.getItem("Name").slice(1,localStorage.getItem("Name").length-1)
        return <div className="container-fluid">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark row">
            <div className="container">
                <Link className="navbar-brand col-6" to="/">CyberMovie</Link>
                <div className="collapse navbar-collapse col-6" >
                    <div className="text-light my-2 my-lg-0">
                            {name}
                        <Link to="/" onClick={handleLogout} className='btn btn-danger ml-4'>Log out</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>;
    }
    else{
        return <div className="container-fluid">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark row">
            <div className="container">
                <Link className="navbar-brand col-6" to="/">CyberMovie</Link>
                <div className="collapse navbar-collapse col-6" >
                    <form className="form-inline my-2 my-lg-0">
                        <Link to={"/login"} className="btn btn-outline-success my-2 my-sm-0 mx-1">Log in</Link>
                        <button className="btn btn-outline-success my-2 my-sm-0 mx-1">Sign up</button>
                    </form>                   
                </div>
            </div>
        </nav>
        
    </div>;
    }
}
