
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import About from './About'
import Projects from './Projects'
import Members from './Members'
import Analytics from './Analytics'
import { HOME_HERO_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heroImage: {
    width: '100%',
    objectFit: 'contain'
  }
}));

const Home = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <img
        alt='hero'
        src={HOME_HERO_IMAGE_PATH}
        className={classes.heroImage}
      />
      <About />
      <Projects />
      <Members />
      <Analytics />
    </main>
  )
}

export default memo(Home)