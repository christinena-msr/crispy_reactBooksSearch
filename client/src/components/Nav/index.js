import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink to="/" className="navbar-item" activeClassName="is-active">GBS</NavLink>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to="/saved" className="navbar-item" activeClassName="is-active">Saved</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav;