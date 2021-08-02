import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from 'Routes/Home/index';
import TV from '../Routes/TV/';
import Search from '../Routes/Search/SearchContainer';
import Header from 'Components/Header';
import Detail from 'Routes/Detail';

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
            <Route path="/movie/:id/" component={Detail} />
            <Route path="/show/:id/" component={Detail} />
            <Redirect from="*" to="/" />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Routes;
