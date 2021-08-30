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

export default function InventoryCutsRow({row, handleClose}) {

  const classes = styles();
  const {utils, cat} = $p;
  const cmeta = utils._clone(row._metadata('clr'));
  const list = new Set;
  cat.characteristics.find_rows({owner: row.nom}, (o) => list.add(o.clr));
  cmeta.choice_params = [{
    name: "ref",
    path: {in: Array.from(list)}
  }];

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
      {/*<DataField _obj={row} _fld="characteristic" isTabular={false} fullWidth/>*/}
      <DataField _obj={row} _fld="clr" _meta={cmeta} isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="width" isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="len" isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="qty" isTabular={false} fullWidth/>
      <DataField _obj={row} _fld="cell" isTabular={false} fullWidth/>
    </div>
  </>

}
