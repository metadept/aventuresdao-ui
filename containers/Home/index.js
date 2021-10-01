
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import clsx from 'clsx'

import { useFarm } from 'contexts/farm-context'
import AvawareAccordion from 'components/AvawareAccordion'
import FarmSummary from 'parts/Farm/FarmSummary'
import FarmDetail from 'parts/Farm/FarmDetail'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(3, 0)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const Home = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()
  const { farms } = useFarm()

  return (
    <main className={classes.root}>
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        <Grid container spacing={3}>
          {farms.filter((item) => !item.decomissioned)
            .map((farm) => (
              <Grid key={farm.name} item xs={12}>
                <AvawareAccordion
                  summary={<FarmSummary farm={farm} />}
                  details={<FarmDetail farm={farm} />}
                />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </main>
  )
}

export default memo(Home)