import React from "react";
import { NavLink } from "react-router-dom";

class PageHeader extends React.Component {
  render() {
    return (
      <header className="page-header">
        <NavLink to="/" className="page-logo">
          <i className="fab fa-instagram page-logo" />
        </NavLink>
        <NavLink to="/" className="page-name">
          <h1>Makinahgram</h1>
        </NavLink>
        <NavLink
          to="/"
          className="page-header-home-link"
          activeClassName="is-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/users/2"
          className="account-link"
          activeClassName="is-active"
        >
          My Account
        </NavLink>
      </header>
    );
  }
}

export default PageHeader;
