import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ history }) => {
  const pathUrlname = (pathurl, name) => (
    <Link to={pathurl} className="li-sty-none">
      {name}
    </Link>
  );

  const signin =		history && history.location.pathname === '/signup' ? pathUrlname('/signin', 'Sign In') : '';

  const signup =		history && history.location.pathname === '/signin' ? pathUrlname('/signup', 'Sign Up') : '';

  return (
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
              {signin}
              {signup}
            </h3>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
