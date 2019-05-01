import React from "react";
import { NavLink } from "react-router-dom";
import CreatePostButton from "./CreatePostButton";

const PageHeader = () => {
  return (
    <header className="page-header">
      <NavLink to="/" className="page-logo">
        <i className="fab fa-instagram page-logo" />
      </NavLink>
      <NavLink to="/" className="page-name">
        <h1>Makinahgram</h1>
      </NavLink>
      <CreatePostButton />
      <NavLink
        exact
        to="/"
        className="page-header-home-link"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink to="/users/1" className="account-link" activeClassName="active">
        My Account
      </NavLink>
    </header>
  );
};

export default PageHeader;
