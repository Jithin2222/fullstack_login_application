import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("user");

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <h3 className="logo">FullStackApp</h3>

            <div className="nav-links">
                {!isLoggedIn && (
                    <>
                        <Link to="/">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}

                {isLoggedIn && (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={logout} className="logout-btn">
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
