
import React from 'react';
import {DynList} from 'metadata-react/DynList/DynList';
import CloseBtn from 'wb-forms/dist/Common/CloseBtn';

export default function InventoryGoodsList({title, handleNavigate, handleIfaceState}) {
  const {utils, doc: {inventory_goods}} = $p;
  const prm = utils.prm();

  const handleEdit = ({ref}) => {
    handleNavigate(`/goods/${ref}`);
  };

  const handleAdd = (_mgr, event) => {
    const ref = utils.generate_guid();
    handleNavigate(`/goods/${ref}`);
  };

  const handleClose = (_mgr, event) => {
    const ref = utils.generate_guid();
    handleNavigate(`/`);
  };

  return <div style={{width: '100vw', height: '100vh'}}>
    <DynList
      frm_key="list"
      _mgr={inventory_goods}
      _acl={'e'}
      _ref={prm.ref}
      handlers={{handleEdit, handleAdd}}
      //onRowSelect={this.handleRowSelect}
      //find_rows={_mgr.find_rows_custom}
      setting_in_menu
      //selectionMode
      denyDel
      //show_variants
      alter_end_btns={<CloseBtn handleClose={handleClose}/>}
      //registerFilterChange={this.registerFilterChange}
      show_search
      title={title}
      handleIfaceState={handleIfaceState}
      height={window.innerHeight - 8}
      width={window.innerWidth - 8}
    />
  </div>;
}
