import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { RegisterValidator } from '../../validations/Auth';
import { signUpAction } from '../../store/actions/authActions';

const Signup = props => (
  <Fragment>
    <main className="flex justify-content-ctr mt-55">
      <div className="col-5 mt-5 form-cover">
        <h3 className="center-text">Sign Up</h3>
        <Formik
          initialValues={{
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            passwordConfirmation: ''
          }}
          validationSchema={RegisterValidator}
          /* istanbul ignore next */
          onSubmit={(values, { setSubmitting, resetForm }) => {
            /* istanbul ignore next */
            setSubmitting(false);
            /* istanbul ignore next */
            props.onSignUp(values, props.history);
            /* istanbul ignore next */
            resetForm({
              email: '',
              firstname: '',
              lastname: '',
              password: '',
              passwordConfirmation: ''
            });
          }}
        >
          {({
            values, errors, touched, isSubmitting, handleSubmit, handleBlur, handleChange
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mt-25">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control mt-5"
                  placeholder="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                />
                {touched.firstname
									&& errors.firstname && <span className="error">{errors.firstname}</span>}
              </div>
              <div className="mt-25">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control mt-5"
                  placeholder="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />
                {touched.lastname
									&& errors.lastname && <span className="error">{errors.lastname}</span>}
              </div>
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
              <div className="mt-25">
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <input
                  autoComplete="true"
                  type="password"
                  name="passwordConfirmation"
                  className="form-control mt-5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirmation}
                />
                {touched.passwordConfirmation
									&& errors.passwordConfirmation && (
                  <span className="error">{errors.passwordConfirmation}</span>
                )}
              </div>
              <div className="center-text mt-25">
                {props.authError && <span className="error">{props.authError}</span>}
              </div>
              <div className="mt-25 center-text">
                <button type="submit" className="mt-25 btn" disabled={isSubmitting}>
									Sign Up
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
  /* istanbul ignore next */
  onSignUp: (newUser, history) => dispatch(signUpAction(newUser, history))
});

export const signupComponent = Signup;

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
