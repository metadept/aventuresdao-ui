
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import dynamic from 'next/dynamic';

import About from './About'
import Projects from './Projects'
import { HOME_HERO_IMAGE_PATH } from 'utils/constants/image-paths'
import { isServer } from 'utils/helpers/utility'
const Members = dynamic(() => import('./Members'), { ssr: false });
const Analytics = dynamic(() => import('./Analytics'), { ssr: false });

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
      {!isServer() &&
        <>
          <Members />
          <Analytics />
        </>
      }
    </main>
  )
}

export default memo(Home)