import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '../../pages/home';
import Signup from '../../pages/signup';
import Signin from '../../pages/signin';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sideBar';
import NotFound from '../../pages/notFound';
import Inbox from '../../pages/inbox';
import Sent from '../../pages/sent';
import Draft from '../../pages/draft';
import ForgotPassword from '../../pages/forgotPassword';
import ResetPassword from '../../pages/resetPassword';
import GuestRoute from '../GuestRoute';
import PrivateRoute from '../PrivateRoute';
import MainBody from '../../components/mainbody';
import InboxMessage from '../../pages/inbox/message';

const sidebarURL = ['/inbox', '/draft', '/sent'];

/* istanbul ignore next */
const App = ({ history }) => (
  /* istanbul ignore next */
  <React.Fragment>
    {(['/signup', '/signin', '/forgot-password', '/reset-password', ...sidebarURL].includes(
      history.location.pathname
    ) || history.location.pathname.match(/inbox-message/)) && <Navbar history={history} />}
    <Switch>
      <Route exact path="/" component={Home} />
      <GuestRoute path="/signup" component={Signup} />
      <GuestRoute path="/signin" component={Signin} />
      <GuestRoute path="/forgot-password" component={ForgotPassword} />
      <GuestRoute path="/reset-password" component={ResetPassword} />
      <MainBody>
        {(sidebarURL.includes(history.location.pathname) ||
        history.location.pathname.match(/inbox-message/))
        && <Sidebar history={history} />}
        <PrivateRoute path="/inbox" component={Inbox} />
        <PrivateRoute exact path="/inbox-message/:id" component={InboxMessage} />
        <PrivateRoute path="/draft" component={Draft} />
        <PrivateRoute path="/sent" component={Sent} />
      </MainBody>
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

export default withRouter(App);
