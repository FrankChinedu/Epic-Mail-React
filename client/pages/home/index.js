import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) => (
  <React.Fragment>
    <div className="main" />
    <div className="index-body flex flex-dir-col justify-content-sb">
      <header className="nav-header">
        <div className="flex justify-content-sb">
          <Link to="/">
            <h1 className="brand-name flex">
              <span className="black" style={{ color: 'white' }}>
									EPIC Mail
              </span>
              <span className="brand-image" />
            </h1>
          </Link>
          <div className="align-self">
            {isAuthenticated ? (
              <Link to="/inbox">
                <h3>Dashboard</h3>
              </Link>
            ) : (
              <Link to="/signup" className="li-sty-none txt-white">
                <h3 className="m-0  sign-in-out join-us">Join us</h3>
              </Link>
            )}
          </div>
        </div>
      </header>
      <div className="index-content">
        <div className="col-5 center-text">
          <h2 className="index-sub-title">It’s all coming together</h2>
          <p className="index-sub-cont">
							exchanging messages over the internet just became way easier
          </p>
          <div>
            {isAuthenticated ? (
              ''
            ) : (
              <Link to="/signin" className="li-sty-none txt-white inline-block">
                <h3 className="m-0 join-us width-fit-content">Sign In</h3>
              </Link>
            )}
          </div>
        </div>
      </div>
      <footer className="flex justify-content-flex-end footer">
        <a href="#">
          <h5 className="txt-white contact-us">contact us</h5>
        </a>
      </footer>
    </div>
  </React.Fragment>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export const HomeComponent = Home;

export default connect(mapStateToProps)(Home);
