import { memo } from 'react'
import { AppBar, Toolbar, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import { useContracts } from 'contexts/contract-context'
import Logo from 'components/Logo'
import AvawareTokenIcon from 'components/AvawareTokenIcon'
import NavBarMenu from './NavBarMenu'
import NavDropMenu from './NavDropMenu'
import ConnectWallet from './ConnectWallet'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    boxShadow: 'none',
    width: '100%',
    height: theme.custom.layout.topAppBarHeight,
    backgroundColor: theme.palette.background.secondary
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  balance: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2)
  }
}));

const TopAppBar = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles()
  const { balances } = useContracts()

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

        <div className={classes.container}>
          <Hidden xsDown>
            <AvawareTokenIcon token='CABBAGE' size={25} />
            <Typography className={classes.balance} color='primary'>
              {parseFloat(balances?.cabbage || 0).toFixed(8).toLocaleString()}
            </Typography>
          </Hidden>
          <ConnectWallet />
          <NavDropMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default memo(TopAppBar);
