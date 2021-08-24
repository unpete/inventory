
import React from 'react';
import {DynList} from 'metadata-react/DynList/DynList';

export default function InventoryGoodsList(props) {
  const {utils, doc: {inventory_goods}} = $p;
  const prm = $p.utils.prm();

  const handleEdit = ({ref}) => {
    props.handleNavigate(`/goods/${ref}`);
  };

  const handleAdd = (_mgr, event) => {
    const ref = utils.generate_guid();
    props.handleNavigate(`/goods/${ref}`);
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
      //btns={}
      //registerFilterChange={this.registerFilterChange}
      show_search
      ignoreTitle
      height={window.innerHeight - 8}
      width={window.innerWidth - 8}
    />
  </div>;
}
