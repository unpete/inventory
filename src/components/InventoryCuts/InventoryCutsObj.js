
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import DataField from 'metadata-react/DataField';
import TabularSection from 'metadata-react/TabularSection';
import DataObj from 'metadata-react/FrmObj/DataObj';
import withStyles600 from 'metadata-react/styles/paper600';

import Tip from 'wb-forms/dist/Common/Tip';
import {Tabs, Tab} from 'wb-forms/dist/Common/AntTabs';

class InventoryCutsObj extends DataObj {

  constructor(props, context) {
    super(props, context);

    this.state.tab = 0;
    $p.cat.scheme_settings.find_rows({obj: 'doc.inventory_cuts.materials'}, (scheme) => {
      if(scheme.name.endsWith('main')) {
        this.scheme = scheme;
      }
    });
  }

  renderFields() {
    const {state: {_obj, tab}, props: {handlers, classes, height}}  = this;
    let h1 = height < 420 ? 420 : height;
    h1 -= 146;

    return <div style={{paddingBottom: 32}}>
      <Tabs
        value={tab}
        onChange={this.handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
      >
        <Tab label={<Tip title="Реквизиты"><i className="fa fa-file-text-o fa-fw"></i></Tip>}/>
        <Tab label={<Tip title="Материалы"><i className="fa fa-object-ungroup fa-fw"></i></Tip>}/>
      </Tabs>
      {tab === 0 && this.renderHead(_obj, classes)}
      {tab === 1 && null}
    </div>;
  }

  renderHead(_obj, classes) {
    return [
      <FormGroup row key="group_sys">
        <DataField _obj={_obj} _fld="number_doc"/>
        <DataField _obj={_obj} _fld="date"/>
      </FormGroup>,
      <FormGroup row key="row1">
        <DataField _obj={_obj} _fld="transactions_kind"/>
        <DataField _obj={_obj} _fld="work_center"/>
      </FormGroup>,
      <FormGroup row key="row1">
        <DataField _obj={_obj} _fld="responsible"/>
        <DataField key="note" _obj={_obj} _fld="note" />
      </FormGroup>,

    ];
  }

  // get Toolbar() {
  //   return DataObjToolbar;
  // }

  handleChangeTab = (event, tab) => {
    this.setState({tab});
  };

  renderTabularSections() {
    return null;
  }
}


export default withStyles600(InventoryCutsObj);

