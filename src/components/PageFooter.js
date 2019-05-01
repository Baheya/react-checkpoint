import React from 'react';
import { NavLink } from 'react-router-dom';

class PageFooter extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <footer className="page-footer">
                    <NavLink to="/" className="home-link">
                        <h1 className="home-link">Home</h1>
                    </NavLink>
                    <NavLink to="/my-account" className="account-link">
                        <p className="account-link">My Account</p>
                    </NavLink>
                </footer>
            </div>
        );
    }
}

export default PageFooter;
