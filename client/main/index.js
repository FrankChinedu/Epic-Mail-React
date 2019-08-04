import React from 'react';
import {
  BrowserRouter, Route, withRouter, Switch
} from 'react-router-dom';
import Home from '../pages/home';
import Signup from '../pages/signup';
import Navbar from '../components/navbar';
import NotFound from '../pages/notFound';

const App = ({ history }) => (
  <React.Fragment>
    {['/signup'].includes(history.location.pathname) && <Navbar />}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
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
