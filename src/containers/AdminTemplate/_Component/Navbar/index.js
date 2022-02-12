import React from "react";
import "./style.css";
import {Link} from "react-router-dom"
export default function AdminNav() {
  const handleLogOut =() =>{
    localStorage.clear();
  }
  return (
    <div>
      <div className="myNav pt-5">
          <p><Link to="/add-user" className="text-decoration-none myNar-item">AddUser</Link></p>
          <p><Link to="/admin-movie" className="text-decoration-none myNar-item">Movie</Link></p>
          <Link onClick={handleLogOut} to="/auth" className="btn btn-danger logout">Log out</Link>
      </div>
    </div>
  );
}
