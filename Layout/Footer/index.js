
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import NavBarMenu from '../NavBarMenu'
import {
  FOOTER_LOGO_IMAGE_PATH,
  FOOTER_LEFT_IMAGE_PATH,
  FOOTER_RIGHT_IMAGE_PATH,
} from 'utils/constants/image-paths'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(6, 0),
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  leftImage: {
    width: 220,
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: 120
    },
  },
  rightImage: {
    width: 220,
    position: 'absolute',
    top: 0,
    right: 0,
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: 80
    },
  },
  logo: {
    maxWidth: 620,
    objectFit: 'contain',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.palette.text.third,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(8),
    '& span': {
      color: theme.palette.text.secondary,
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <img
          alt='left-image'
          src={FOOTER_LEFT_IMAGE_PATH}
          className={classes.leftImage}
        />
        <img
          alt='right-image'
          src={FOOTER_RIGHT_IMAGE_PATH}
          className={classes.rightImage}
        />
        <img
          alt='footer-logo'
          src={FOOTER_LOGO_IMAGE_PATH}
          className={classes.logo}
        />
        <Typography className={classes.label}>
          AVentures <span>DAO</span>
        </Typography>
        <NavBarMenu />
      </div>
    </footer>
  );
};

export default memo(Footer);
