import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ history, isAuthenticated, user }) => {
  const pathUrlname = (pathurl, name) => (
    <div className="align-self">
      <h3 className="m-0  sign-in-out">
        <Link to={pathurl} className="li-sty-none">
          {name}
        </Link>
      </h3>
    </div>
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
          {signin}
          {signup}
          {isAuthenticated ? (
            <div className="align-self user-panel flex align-item-center">
              <div className="prof-img mr-25" />
              <p>{user.firstname}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export const NavbarComponent = Navbar;

export default connect(mapStateToProps)(Navbar);
