import React from 'react';
import {
  BrowserRouter, Route, withRouter, Switch
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '../pages/home';
import Signup from '../pages/signup';
import Signin from '../pages/signin';
import Navbar from '../components/navbar';
import NotFound from '../pages/notFound';
import ForgotPassword from '../pages/forgotPassword';
import ResetPassword from '../pages/resetPassword';

/* istanbul ignore next */
const App = ({ history }) => (
  /* istanbul ignore next */
  <React.Fragment>
    {['/signup', '/signin', '/forgot-password', '/reset-password'].includes(
      history.location.pathname
    ) && <Navbar history={history} />}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route component={NotFound} />
    </Switch>
    <ToastContainer
      autoClose={5000}
      position="top-center"
      hideProgressBar
      rtl={false}
      pauseOnHover
    />
  </React.Fragment>
);

const AppWithRouter = withRouter(App);
export default function Main() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppWithRouter />
      </BrowserRouter>
    </React.Fragment>
  );
}
