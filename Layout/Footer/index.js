
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider } from '@material-ui/core'
import clsx from 'clsx'

import AvawareTokenIcon from 'components/AvawareTokenIcon'
import FooterCash from './FooterCash'
import FooterSocial from './FooterSocial'
import FooterPartners from './FooterPartners'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.background.secondary,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
  divider: {
    height: 180,
    width: 1,
    margin: theme.spacing(0, 1),
    backgroundColor: theme.custom.palette.border,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
}));

const Footer = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <footer className={classes.root}>
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        <AvawareTokenIcon size={100} />
        <FooterCash />
        <Divider orientation='vertical' className={classes.divider} />
        <FooterSocial />
        <Divider orientation='vertical' className={classes.divider} />
        <FooterPartners />
      </div>
    </footer>
  );
};

export default memo(Footer);
