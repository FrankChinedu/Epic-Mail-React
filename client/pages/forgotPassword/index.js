import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { ForgpotPasswordValidator } from '../../validations/Auth';
import { forgotPasswordAction } from '../../store/actions/authActions';

const ForgotPassword = props => (
  <Fragment>
    <div>
      <main className="flex justify-content-ctr mt-55">
        <div className="col-5 mt-5 form-cover">
          <h3 className="center-text">Forgot Password</h3>
          <Formik
            initialValues={{
              email: ''
            }}
            validationSchema={ForgpotPasswordValidator}
            /* istanbul ignore next */
            onSubmit={(values, { setSubmitting, resetForm }) => {
              /* istanbul ignore next */
              setSubmitting(false);
              /* istanbul ignore next */
              props.onSubmit(values, props.history);
              /* istanbul ignore next */
              resetForm({
                email: ''
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
                  <p className="center-text">
                    {touched.email && errors.email && <span className="error">{errors.email}</span>}
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
    </div>
  </Fragment>
);

const mapDispatchToProps = dispatch => ({
  onSubmit: (value, history) => dispatch(forgotPasswordAction(value, history))
});

export const forgotPasswordComponent = ForgotPassword;

export default connect(null, mapDispatchToProps)(ForgotPassword);
