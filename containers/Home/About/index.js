
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import clsx from 'clsx'

import {
  FIRE_ICON_IMAGE_PATH,
  SUN_ICON_IMAGE_PATH,
  MOUNTINE_ICON_IMAGE_PATH,
  GREY_DIVIDER_ICON_IMAGE_PATH
} from 'utils/constants/image-paths'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(8, 0)
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  divider: {
    width: '100%',
    objectFit: 'contain',
    margin: theme.spacing(5, 0)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    height: 95,
    objectFit: 'contain',
    marginBottom: theme.spacing(2)
  }
}));

const About = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()

  return (
    <main id='about' className={clsx(classes.root, commonClasses.containerWidth)}>
      <Typography
        align='center'
        className={classes.title}
      >
        {`Transparent venture DAO owned & managed by Avalanche OGs`}
      </Typography>
      <img
        alt='grey-divider'
        src={GREY_DIVIDER_ICON_IMAGE_PATH}
        className={classes.divider}
      />
      <Grid container spacing={4}>
        {ABOUT_ITEMS.map((item) => (
          <Grid key={item.id} item xs={12} sm={4}>
            <div className={classes.container}>
              <img
                alt={item.id}
                src={item.icon}
                className={classes.icon}
              />
              <Typography variant='h5' align='center' >
                {item.description}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default memo(About)

const ABOUT_ITEMS = [
  {
    id: 'fire',
    icon: FIRE_ICON_IMAGE_PATH,
    description: 'Support Avalanche projects from ideation to growth.'
  },
  {
    id: 'mountine',
    icon: MOUNTINE_ICON_IMAGE_PATH,
    description: 'Educate the community about existing and upcoming Avalanche projects.'
  },
  {
    id: 'sun',
    icon: SUN_ICON_IMAGE_PATH,
    description: 'Be a trusted & positive voice in the Avalanche community.'
  }
]