import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogoutAction } from '../../store/actions/authActions';

const Navbar = ({
  history, isAuthenticated, user, handleLogOut
}) => {
  const pathUrlname = (pathurl, name) => (
    <div className="align-self">
      <h3 className="m-0  sign-in-out">
        <Link to={pathurl} className="li-sty-none">
          {name}
        </Link>
      </h3>
    </div>
  );

  const [profile, setProfile] = useState(false);
  const openProfile = () => {
    setProfile(!profile);
  };

  const logOut = () => {
    handleLogOut(history);
  };

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
            <Fragment>
              <div
                className="align-self user-panel flex align-item-center cursor"
                onClick={openProfile}
              >
                <div className="prof-img mr-25" />
                <p>{user.firstname}</p>
                <span id="profile-panel">
                  <a href="#" id="drop-down">
										&#9650;
                  </a>
                </span>
              </div>
              <div
                className="profile-section"
                id="profile-section"
                style={{ height: 'fit-content' }}
              >
                {profile ? (
                  <div>
                    <ul className="">
                      <li>
                        <a id="user-email" style={{ fontSize: '55%' }}>
                          {user.email}
                        </a>
                      </li>
                      <li onClick={logOut}>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </Fragment>
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

export const handleLogOut = history => handleLogoutAction(history);

export default connect(mapStateToProps, { handleLogOut })(withRouter(Navbar));
