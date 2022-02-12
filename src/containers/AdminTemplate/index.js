import React from "react";
import AdminNav from "./_Component/Navbar";
import { Route, Redirect } from "react-router-dom";
export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  if (localStorage.getItem("UserAdmin")) {
    return (
      <div className="row container">
        <div className="col-sm-2 text-center">
          <AdminNav></AdminNav>
        </div>
        <div className="col-sm-8">
          <Route exact={exact} path={path} component={component} />
        </div>
      </div>
    );
  }
  return <Redirect to="/auth" />;
}
