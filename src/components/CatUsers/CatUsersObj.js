/**
 * Карточка пользователя
 *
 * @module CatUsersObj
 *
 * Created by Evgeniy Malyarov on 02.09.2021.
 */


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



class CatUsersObj extends DataObj {


  handleClose() {
    const {state: {_obj}, props: {handlers}} = this;
    handlers.handleNavigate(`/cut.users/list${_obj ? '/?ref=' + _obj.ref : ''}`);
  }

  renderFields() {
    const {state: {_obj, tab, edit_row}, props: {handlers, classes, height, title}}  = this;
    return <>
      <Helmet key="helmet" title={title}/>
      <DataField _obj={_obj} _fld="name"/>
    </>;
  }

  renderTabularSections() {
    return null;
  }

}


export default withStyles600(CatUsersObj);

