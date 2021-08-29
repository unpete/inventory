import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';

export const styles = makeStyles(theme => ({
  fullFlex: {
    flex: 1
  },
}));

const cache = {old: {}, new: {}};

export default function InventoryGoodsRow({row, handleClose}) {

  const classes = styles();

  return <Toolbar disableGutters>
    <Button
      title="Записать и закрыть"
      size="small"
      variant="outlined"
      onClick={handleClose}>Записать строку</Button>
    <div className={classes.fullFlex} />
  </Toolbar>;


}
