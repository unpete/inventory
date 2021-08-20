
import React from 'react';
import {DynList} from 'metadata-react/DynList/DynList';
import AutoSizer from 'react-virtualized-auto-sizer';

export default function InventoryCutsList() {

  const {utils, doc: {inventory_cuts}} = $p;
  const prm = {};// $p.utils.prm();

  return <div style={{width: '100vw', height: '100vh'}}>
    <DynList
      frm_key="list"
      _mgr={inventory_cuts}
      _acl={'e'}
      _ref={prm.ref}
      handlers={{}}
      //onRowSelect={this.handleRowSelect}
      //find_rows={_mgr.find_rows_custom}
      setting_in_menu
      //selectionMode
      //denyAddDel
      //show_variants
      //btns={}
      //registerFilterChange={this.registerFilterChange}
      show_search
      ignoreTitle
      height={window.innerHeight - 8}
      width={window.innerWidth - 8}
    />
  </div>;

}
