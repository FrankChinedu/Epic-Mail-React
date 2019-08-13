import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { SignInValidator } from '../../validations/Auth';
import { signInAction } from '../../store/actions/authActions';

const Signin = props => (
  <Fragment>
    <main className="flex justify-content-ctr">
      <div className="col-5 mt-5 form-cover">
        <h3 className="center-text">Sign In</h3>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={SignInValidator}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            props.onSignIn(values, props.history);
            resetForm({
              email: '',
              password: ''
            });
          }}
        >
          {({
            values, errors, touched, isSubmitting, handleSubmit, handleBlur, handleChange
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mt-25">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-5"
                  placeholder="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="mt-25">
                <label htmlFor="password">Password</label>
                <input
                  autoComplete="true"
                  type="password"
                  name="password"
                  className="form-control mt-5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password
									&& errors.password && <span className="error">{errors.password}</span>}
              </div>
              <div className="center-text mt-25">
                {props.authError && <span className="error">{props.authError}</span>}
              </div>
              <div className="mt-25 center-text">
                <button type="submit" className="mt-25 btn" disabled={isSubmitting}>
									Sign in
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  </Fragment>
);

const mapStateToProps = state => ({
  authError: state.auth.authError,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  onSignIn: (newUser, history) => dispatch(signInAction(newUser, history))
});

export const signinComponent = Signin;

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
