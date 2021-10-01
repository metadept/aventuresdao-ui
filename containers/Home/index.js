
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

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

  return (
    <main className={classes.root}>
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        Home page
      </div>
    </main>
  )
}

export default memo(Home)