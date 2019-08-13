import React from 'react';
import {
  BrowserRouter, Route, withRouter, Switch
} from 'react-router-dom';
import Home from '../pages/home';
import Signup from '../pages/signup';
import Signin from '../pages/signin';
import Navbar from '../components/navbar';
import NotFound from '../pages/notFound';

/* istanbul ignore next */
const App = ({ history }) => (
  /* istanbul ignore next */
  <React.Fragment>
    {['/signup', '/signin'].includes(history.location.pathname) && <Navbar history={history} />}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route component={NotFound} />
    </Switch>
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
