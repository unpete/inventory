import createTheme from '@material-ui/core/styles/createTheme';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
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

