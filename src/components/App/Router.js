import React from 'react';
import PropTypes from 'prop-types';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Dumb from './Dumb';
import {lazy} from './lazy';

const history = createBrowserHistory();

const handleNavigate = (url) => {
  history.push(url);
};

class AppRouter extends React.Component {

  render() {
    return <Router history={history}>
      <Switch>
        <Route
          path={`${match.url}/:ref([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})`}
          render={(props) => wraper(lazy.DataObj, props, 'obj')}
        />
        <Route
          path={`${match.url}/list`}
          render={(props) => wraper(lazy.DataList, props, 'list')}
        />
        <Route>
          <Dumb />
        </Route>
      </Switch>
    </Router>;
  }

  getChildContext() {
    return {handleNavigate};
  }
}

AppRouter.childContextTypes = {
  handleNavigate: PropTypes.func,
};

export default AppRouter;

