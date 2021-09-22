import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import DataField from 'metadata-react/DataField';

export const styles = makeStyles(theme => ({
  fullFlex: {
    flex: 1
  },
}));

const cache = {old: {}, new: {}};

export default function InventoryGoodsRow({row, handleClose}) {

  const classes = styles();

  return <>
    <Toolbar disableGutters>
      <Button
        title="Записать и закрыть"
        size="small"
        variant="outlined"
        onClick={handleClose}>Записать строку</Button>
      <div className={classes.fullFlex} />
    </Toolbar>
    <div style={{maxWidth: 600}}>
      <DataField _obj={row} _fld="nom" isTabular={false} fullWidth/>
      {/*<DataField _obj={row} _fld="nom_characteristic" isTabular={false} fullWidth/>*/}
      <DataField _obj={row} _fld="clr" isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="width" isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="len" isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="qty" isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="quantity" isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="recorded_quantity" isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="unit" isTabular={false} fullWidth/>
    </div>
  </>


}
