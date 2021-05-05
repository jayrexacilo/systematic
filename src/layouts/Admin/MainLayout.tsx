import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import Sidebar from '../../components/Admin/Sidebar';

function Admin () {

  return (
    <>
      <Sidebar />
    </>
  );
}

export default Admin;
