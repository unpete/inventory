
import React from 'react';
import {DynList} from 'metadata-react/DynList/DynList';
import AutoSizer from 'react-virtualized-auto-sizer';

export default function InventoryCutsList(props) {

  const {utils, doc: {inventory_cuts}} = $p;
  const prm = utils.prm();

  const handleEdit = ({ref}) => {
    props.handleNavigate(`/cuts/${ref}`);
  };

  const handleAdd = (_mgr, event) => {
    const ref = utils.generate_guid();
    props.handleNavigate(`/cuts/${ref}`);
  };

  return <div style={{width: '100vw', height: '100vh'}}>
    <DynList
      frm_key="list"
      _mgr={inventory_cuts}
      _acl={'e'}
      _ref={prm.ref}
      handlers={{handleEdit, handleAdd}}
      //onRowSelect={this.handleRowSelect}
      //find_rows={_mgr.find_rows_custom}
      setting_in_menu
      //selectionMode
      denyDel
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
