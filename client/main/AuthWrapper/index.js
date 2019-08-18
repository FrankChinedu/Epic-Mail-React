import React from 'react';
import { connect } from 'react-redux';
import Route from '../Route';

const AuthWrapper = ({ isSettingAuth }) => (isSettingAuth ? null : <Route />);

const mapStateToProps = state => ({
  isSettingAuth: state.auth.isSettingAuth
});

export default connect(mapStateToProps)(AuthWrapper);
