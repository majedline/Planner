import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLinks';


const Navbar = () => {
    return (
        <nav className="nav-wrapper grey draken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Plan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>

    );
}

export default Navbar;