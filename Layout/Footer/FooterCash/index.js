
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'

import FooterMenuItem from '../FooterMenuItem'
import { CABBAGE_CASH_MENU } from 'utils/constants/footer-menu'

const useStyles = makeStyles(theme => ({
  root: {
    width: 220,
    margin: theme.spacing(0.5, 0)
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)
  }
}));

const FooterCash = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant='h6'
        color='textPrimary'
        className={classes.title}
      >
        Adventures DAO
      </Typography>
      <Grid container>
        {CABBAGE_CASH_MENU.map((menuItem) => (
          <Grid item key={menuItem.TITLE} xs={6} sm={12}>
            <FooterMenuItem menu={menuItem} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default memo(FooterCash);
