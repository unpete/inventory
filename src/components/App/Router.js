import React from 'react';
import PropTypes from 'prop-types';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Dumb from './Dumb';
import {InventoryGoodsObj, InventoryGoodsList} from '../InventoryGoods';
import {InventoryCutsObj, InventoryCutsList} from '../InventoryCuts';

const history = createBrowserHistory();

const handleNavigate = (url) => {
  history.push(url);
};

class AppRouter extends React.Component {

  render() {
    const {inventory_cuts, inventory_goods} = $p.doc;
    const {handleIfaceState, meta_loaded, user, complete_loaded} = this.props;
    const handlers = {handleNavigate, handleIfaceState};

    return <Router history={history}>
        <Switch>
          <Route
            path={'/cuts/:ref([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})'}
            render={(props) => <InventoryCutsObj {...this.props} {...props} handlers={handlers} _mgr={inventory_cuts}/>}
          />
          <Route
            path={'/cuts/list'}
            render={(props) => <InventoryCutsList {...this.props} {...props} handleNavigate={handleNavigate} _mgr={inventory_cuts}/>}
          />
          <Route
            path={'/goods/:ref([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})'}
            render={(props) => <InventoryGoodsObj {...this.props} {...props} handlers={handlers} _mgr={inventory_goods}/>}
          />
          <Route
            path={'/goods/list'}
            render={(props) => <InventoryGoodsList {...this.props} {...props} handleNavigate={handleNavigate} _mgr={inventory_goods}/>}
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

