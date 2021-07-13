import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

import {useStyles} from './Loading';

function Dumb() {
  const classes = useStyles();
  return <header className={classes.header}>
    <div className={classes.root}>
      <h3>В url отсутствует ссылка на изделие или шаблон</h3>
      <p>Используйте для отладки:</p>
      <nav>
        <ul>
          <li>
            <Link to="/cuts/list">Инвентаризация обрези</Link>
          </li>
          <li>
            <Link to="/goods/list">Инвентаризация товаров</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>;
}

export default Dumb;
