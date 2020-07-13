import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import AdminHome from "../admin/home/Home";
import PublicHome from "../public/home/Home";
import LoginPage from "../account/login/Login";

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer closeOnClick position="top-center" autoClose={5000} />
      <Switch>
        <Route path="/admin" component={AdminHome} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={PublicHome} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
