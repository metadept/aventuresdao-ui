import { memo } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import Logo from 'components/Logo'
import NavBarMenu from '../NavBarMenu'
import NavDropMenu from './NavDropMenu'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    boxShadow: 'none',
    width: '100%',
    height: theme.custom.layout.topAppBarHeight,
    backgroundColor: theme.palette.background.default
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  }
}));

const TopAppBar = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles()

  return (
    <AppBar
      position='relative'
      className={classes.appBar}
    >
      <Toolbar className={clsx(commonClasses.containerWidth, classes.toolBar)}>
        <div className={classes.container}>
          <Logo />
        </div>
        <NavBarMenu />
        <NavDropMenu />
      </Toolbar>
    </AppBar>
  );
};

export default memo(TopAppBar);
