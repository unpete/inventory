
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DataField from 'metadata-react/DataField';
import TabularSection from 'metadata-react/TabularSection';
import DataObj from 'metadata-react/FrmObj/DataObj';
import withStyles600 from 'metadata-react/styles/paper600';
import Tip from 'wb-forms/dist/Common/Tip';
import {Tabs, Tab} from 'wb-forms/dist/Common/AntTabs';
import {Helmet} from 'react-helmet';

import InventoryCutsRow from './InventoryCutsRow';

class InventoryCutsObj extends DataObj {

  constructor(props, context) {
    super(props, context);

    this.state.tab = 0;
    this.state.edit_row = null;
    this.prev = {};
    this.denyDel = true;
    $p.cat.scheme_settings.find_rows({obj: 'doc.inventory_cuts.materials'}, (scheme) => {
      if(scheme.name.endsWith('main')) {
        this.scheme = scheme;
      }
    });
  }

  handleChangeTab = (event, tab) => {
    this.setState({tab});
  };

  handleClose() {
    const {state: {_obj}, props: {handlers}} = this;
    handlers.handleNavigate(`/cuts/list${_obj ? '/?ref=' + _obj.ref : ''}`);
  }

  renderFields() {
    const {state: {_obj, tab, edit_row}, props: {handlers, classes, height, title}}  = this;
    let h1 = height < 420 ? 420 : height;
    h1 -= 146;

    return <>
      <Helmet key="helmet" title={title}/>
      <Tabs
        value={tab}
        onChange={this.handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
      >
        <Tab label={<Tip title="Реквизиты"><i className="fa fa-file-text-o fa-fw"></i> Шапка</Tip>}/>
        <Tab label={<Tip title="Материалы"><i className="fa fa-object-ungroup fa-fw"></i> Материалы</Tip>}/>
      </Tabs>
      {tab === 0 && this.renderHead()}
      {tab === 1 && (edit_row ? <InventoryCutsRow row={edit_row} handleClose={this.handleResetEdit}/> : this.renderMaterials())}
    </>;
  }

  renderTabularSections() {
    return null;
  }

  handleAdd = () => {
    const {_obj} = this.state;
    /* eslint-disable-next-line */
    const edit_row = _obj.goods.add(Object.assign({}, this.prev));
    this.setState({edit_row});
  };

  handleResetEdit = () => {
    this.setState({edit_row: null});
  };

  handleEdit = () => {
    const {_materials, state: {_obj}} = this;
    if(_materials) {
      const {_tabular, selected} = _materials.state;
      if(selected && selected.hasOwnProperty('rowIdx')) {
        const edit_row = _materials.rowGetter(selected.rowIdx);
        this.setState({edit_row});
      }
    }
  };

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
        ref={(el) => this._materials = el}
        btns={[
          <IconButton key="as1" disabled>|</IconButton>,
          <IconButton key="ed1" onClick={this.handleEdit} title="Редактировать строку"><EditIcon /></IconButton>
        ]}
        //onCellSelected={this.rowUpdate}
        //onRowUpdated={this.defferedUpdate}
      />
    </div>;
  }

  // get Toolbar() {
  //   return DataObjToolbar;
  // }

}


export default withStyles600(InventoryCutsObj);

