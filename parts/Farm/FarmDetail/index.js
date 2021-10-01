
import { memo } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import DepositForm from './DepositForm'
import WithdrawForm from './WithdrawForm'
import EarningCard from './EarningCard'

const useStyles = makeStyles(() => ({
  container: {
    width: '100%'
  },
}));

const FarmDetail = ({
  farm
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12} sm={4}>
        <DepositForm farm={farm} />
      </Grid>

      <Grid item xs={12} sm={4}>
        <WithdrawForm farm={farm} />
      </Grid>

      <Grid item xs={12} sm={4}>
        <EarningCard farm={farm} />
      </Grid>
    </Grid>
  )
}

export default memo(FarmDetail)