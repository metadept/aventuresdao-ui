
import { memo, useMemo } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import AvawarePairsIcon from 'components/AvawarePairsIcon';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 0),
    }
  },
  apr: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: theme.spacing(2),
    borderLeft: `1px solid ${theme.custom.palette.border}`,
    borderRight: `1px solid ${theme.custom.palette.border}`,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      padding: theme.spacing(1, 0),
      borderLeft: 0,
      borderRight: 0
    },
  },
  label: {
    padding: theme.spacing(0, 2)
  },
  balance: {
    '& span': {
      color: theme.palette.primary.main
    }
  }
}));

const FarmSummary = ({
  farm
}) => {
  const classes = useStyles();

  const pairs = useMemo(() => {
    let data = []
    if (farm.token0) {
      data = [...data, farm.token0]
    }

    if (farm.token1) {
      data = [...data, farm.token1]
    }
    return data
  }, [farm])

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={5}>
        <div className={classes.header}>
          <AvawarePairsIcon pairs={pairs} />
          <Typography className={classes.label}>
            {farm.name}
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={3}>
        <div className={classes.apr}>
          <Typography>
            {`${(farm?.APR || 0).toLocaleString()}% APR`}
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={4}>
        <div className={classes.header}>
          <Typography className={classes.balance}>
            TVL: <span>{(farm?.totalSupplyUSD || 0).toLocaleString()}</span>
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default memo(FarmSummary)