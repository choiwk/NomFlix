import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from 'Routes/Home/index';
import TV from '../Routes/TV/';
import Search from '../Routes/Search/SearchPresenter';
import Header from 'Components/Header';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Redirect from="*" to="/" />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Routes;
