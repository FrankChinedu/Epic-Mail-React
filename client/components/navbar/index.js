import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <React.Fragment>
    <header className="nav-header">
      <div className="flex justify-content-sb">
        <Link to="/">
          <h1 className="brand-name flex">
            <span className="black">EPIC Mail</span>
            <span className="brand-image" />
          </h1>
        </Link>
        <div className="align-self">
          <h3 className="m-0  sign-in-out">
            <Link to="/signin" className="li-sty-none">
							Sign In
            </Link>
          </h3>
        </div>
      </div>
    </header>
  </React.Fragment>
);

export default Navbar;
