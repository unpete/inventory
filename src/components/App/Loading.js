import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import {FrmLogin} from 'metadata-react/FrmLogin/Proxy/FrmLogin';  // логин и свойства подключения
import loginStyles from 'metadata-react/FrmLogin/Proxy/styles';

export const useStyles = makeStyles(({breakpoints}) => ({
  root: {
    width: '50vw',
    [breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
  loading: {
    textAlign: 'center',
  },
  header: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'left',
    marginTop: 16,
  },
  h3: {
    display: 'flex',
    alignItems: 'center',
  }
}));

const Login = loginStyles(FrmLogin);

function handleLogin(login, password) {
  return $p.adapters.pouch.log_in(login, password);
}

function Text({classes, meta_loaded, common_loaded, complete_loaded, user}) {
  let text;
  if(!meta_loaded) {
    text = 'Загрузка модулей...';
  }
  else if(!common_loaded) {
    text = 'Чтение общих данных...';
  }
  else if(!user.logged_in) {
    text = 'Проверка подлинности пользователя...';
  }
  else if(!complete_loaded) {
    text = 'Чтение справочников...';
  }
  return <Typography className={classes.text}>{text}</Typography>;
}
Text.propTypes = {
  classes: PropTypes.object.isRequired,
  meta_loaded: PropTypes.bool,
  common_loaded: PropTypes.bool,
  complete_loaded: PropTypes.bool,
  user: PropTypes.object,
};

function progress({meta_loaded, common_loaded, complete_loaded, page}) {
  let value = 5;
  if(meta_loaded) {
    value = 10;
  }
  if(common_loaded) {
    value = 10;
  }
  if(complete_loaded) {
    value = 100;
  }
  else if(page.docs_written) {
    value = 100 * page.docs_written / page.total_rows;
  }
  let valueBuffer = value + Math.random() * 13;
  if(valueBuffer > 100) {
    valueBuffer = 100;
  }
  return {value, valueBuffer};
}

function Loading(props) {
  const classes = useStyles();

  const {meta_loaded, common_loaded, user, complete_loaded} = props;
  let need_auth = meta_loaded && common_loaded && !user.try_log_in && !user.logged_in;
  if(need_auth && complete_loaded) {
    const {current_user} = $p;
    if(current_user && current_user.name == user.name) {
      need_auth = false;
    }
  }

  return <div className={classes.loading}>
        <header className={classes.header}>
          <div className={classes.root}>
            {need_auth ?
              <Login {...props} handleLogin={handleLogin}/>
              :
              <>
                <LinearProgress variant="buffer" {...progress(props)}/>
                <Text classes={classes} {...props} />
              </>
            }
          </div>
        </header>
      </div>;
}



export default Loading;
