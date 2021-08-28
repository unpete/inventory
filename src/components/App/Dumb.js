import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import {useStyles} from './Loading';

function Dumb() {
  const classes = useStyles();
  return <header className={classes.header}>
    <div className={classes.root}>
      <h3 className={classes.h3}><PlaylistAddCheckIcon fontSize="large"/> Инвентаризация:</h3>
      <nav>
        <ul>
          <li>
            <Link to="/cuts/list">НЗП и обрези</Link>
          </li>
          <li>
            <Link to="/goods/list">Товаров на складе</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>;
}

export default Dumb;
