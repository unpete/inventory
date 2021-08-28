
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

    return <>
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
      {tab === 0 && this.renderHead()}
      {tab === 1 && this.renderMaterials()}
    </>;
  }

  renderHead() {
    const {_obj} = this.state;
    return <>
      <FormGroup row>
        <DataField _obj={_obj} _fld="number_doc"/>
        <DataField _obj={_obj} _fld="date"/>
      </FormGroup>
      <FormGroup row>
        <DataField _obj={_obj} _fld="transactions_kind"/>
        <DataField _obj={_obj} _fld="work_center"/>
      </FormGroup>
      <FormGroup row>
        <DataField _obj={_obj} _fld="responsible"/>
        <DataField _obj={_obj} _fld="note" />
      </FormGroup>
    </>;
  }


  renderMaterials() {
    const {scheme, state: {_obj}} = this;
    return <div style={{height: 'calc(100vh - 120px)'}}>
      <TabularSection
        _obj={_obj}
        _meta={this._meta}
        _tabular="materials"
        scheme={this.scheme}
        //minHeight={180}
        //denyAddDel
        denyReorder
        //btns={this.btns()}
        //onCellSelected={this.rowUpdate}
        //onRowUpdated={this.defferedUpdate}
      />
    </div>;
  }

  // get Toolbar() {
  //   return DataObjToolbar;
  // }

  handleChangeTab = (event, tab) => {
    this.setState({tab});
  };

  handleClose() {
    const {state: {_obj}, props: {handlers}} = this;
    handlers.handleNavigate(`/cuts/list${_obj ? '/?ref=' + _obj.ref : ''}`);
  }

  handleAdd = () => {
    const {_obj} = this.state;
    /* eslint-disable-next-line */
    const row = _obj.materials.add({});
  };

  renderTabularSections() {
    return null;
  }
}


export default withStyles600(InventoryCutsObj);

