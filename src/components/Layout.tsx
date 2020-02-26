import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  makeStyles,
  createStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

import theme from '../../static/themes/theme';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

interface PropsType {
  children: React.ReactNode;
  tabIndex: number;
}

const useStyles = makeStyles((/* theme: Theme */) =>
  createStyles({
    root: {
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },

    content: {
      flexGrow: 1,
    },

    main: {
      position: 'relative' as 'relative',
      background: 'white',
      top: '100px',
      maxWidth: '1024px',
      margin: '0 auto',
      padding: '50px 0',
      zIndex: 2,
      marginBottom: '100px',
    },
  }));

const TemplateWrapper = ({ children, tabIndex }: PropsType) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.content}>
          <Navbar activeTab={tabIndex} />
          <main className={classes.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
