import React, { Fragment, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { ResetPasswordValidator } from '../../validations/Auth';
import { ResetPasswordAction } from '../../store/actions/authActions';

const ResetPassword = (props) => {
  const { history: { location } } = props;
  const [accessToken, setAccessToken] = useState(null);
  useEffect(
    () => {
      const val = location && location.search;
      const urlParams = new URLSearchParams(val);
      const token = urlParams.get('x-access-token');
      setAccessToken(token);
    },
    [accessToken]
  );
  return (
    <Fragment>
      <main className="flex justify-content-ctr mt-55">
        <div className="col-5 mt-5 form-cover">
          <h3 className="center-text">Reset Password</h3>
          <Formik
            initialValues={{
              password: '',
              passwordConfirmation: ''
            }}
            validationSchema={ResetPasswordValidator}
            /* istanbul ignore next */
            onSubmit={(values, { setSubmitting, resetForm }) => {
              /* istanbul ignore next */
              setSubmitting(false);
              /* istanbul ignore next */
              const data = {
                password: values.password,
                accessToken
              };
              /* istanbul ignore next */
              props.onSubmit(data, props.history);
              /* istanbul ignore next */
              resetForm({
                password: '',
                passwordConfirmation: ''
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              handleSubmit,
              handleBlur,
              handleChange
            }) => (
              <form onSubmit={handleSubmit}>
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
                    placeholder="password"
                  />
                  <p className="center-text">
                    {touched.password
											&& errors.password && <span className="error">{errors.password}</span>}
                  </p>
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
                    placeholder="confirm password"
                  />
                  <p className="center-text">
                    {touched.passwordConfirmation
											&& errors.passwordConfirmation && (
                      <span className="error">{errors.passwordConfirmation}</span>
                    )}
                  </p>
                </div>
                <div className="center-text mt-25">
                  {props.authError && <span className="error">{props.authError}</span>}
                </div>
                <div className="mt-25 center-text">
                  <button type="submit" className="mt-25 btn" disabled={isSubmitting}>
										Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </main>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  /* istanbul ignore next */
  onSubmit: (value, history) => dispatch(ResetPasswordAction(value, history))
});

export const ResetPasswordComponent = ResetPassword;

export default connect(null, mapDispatchToProps)(ResetPassword);
