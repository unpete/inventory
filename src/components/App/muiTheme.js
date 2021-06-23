import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#44b0ff`,
      contrastText: `#fff`
    },
    type: 'light',
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    }
  },
  blueBorder: {
    border: `1px solid #44b0ff`
  }
});

export default theme;

