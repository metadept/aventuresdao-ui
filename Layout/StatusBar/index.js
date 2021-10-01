import { memo } from 'react'
import { Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import { useFarm } from 'contexts/farm-context'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1, 0),
    backgroundColor: theme.palette.background.primary,
    boxShadow: `1px 2px 5px ${theme.palette.background.default}`
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
  label: {
    fontSize: 14,
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 0),
    },
    '& span': {
      fontWeight: 'bold',
    }
  },
  divider: {
    height: '100%',
    width: 1,
    margin: theme.spacing(0, 1),
    backgroundColor: theme.custom.palette.border,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
}));

const StatusBar = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const { marketCap, tokenPrice, totalSupply } = useFarm()

  return (
    <div className={classes.root}>
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        <Typography className={classes.label}>
          <span>Cabbage:</span> ${tokenPrice.toLocaleString()}
        </Typography>

        <Divider
          orientation='vertical'
          className={classes.divider}
        />

        <Typography className={classes.label}>
          <span>MarketCap:</span> ${marketCap.toLocaleString()}
        </Typography>

        <Divider
          orientation='vertical'
          className={classes.divider}
        />

        <Typography className={classes.label}>
          <span>Coins in circulation:</span> {totalSupply.toLocaleString()}
        </Typography>
      </div>
    </div>
  );
};

export default memo(StatusBar);
