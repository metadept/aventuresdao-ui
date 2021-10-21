
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import clsx from 'clsx'

import PROJECTS from 'utils/constants/projects'
import { DIVIDER_ICON_IMAGE_PATH } from 'utils/constants/image-paths'
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
    '& span': {
      color: theme.palette.text.secondary
    }
  },
  divider: {
    width: 214,
    objectFit: 'contain',
    margin: theme.spacing(2, 0)
  },
  container: {
    margin: theme.spacing(5, 0)
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 281,
    height: 344,
    objectFit: 'cover',
    border: `1px solid ${theme.custom.palette.border}`,
    marginBottom: theme.spacing(2)
  }
}));

const Projects = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()

  return (
    <main id='projects' className={clsx(classes.root, commonClasses.containerWidth)}>
      <img
        alt='divider'
        src={DIVIDER_ICON_IMAGE_PATH}
        className={classes.divider}
      />
      <Typography
        align='center'
        className={classes.title}
      >
        Investment <span>Portfolio</span>
      </Typography>
      <Grid container spacing={4} className={classes.container}>
        {PROJECTS.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <div className={classes.itemContainer}>
              {/* <img alt={item.id} src={item.icon} className={classes.icon} /> */}
              <div className={classes.icon} />
              <Typography variant='h6' align='center' >
                {item.description}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default memo(Projects)