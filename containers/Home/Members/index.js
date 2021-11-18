
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import clsx from 'clsx'

import MemberCarousel from './MemberCarousel'
import MEMBERS from 'utils/constants/members'
import { DIVIDER_ICON_IMAGE_PATH } from 'utils/constants/image-paths'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    background: 'linear-gradient(180deg, #FFFFFF 0%, #EBF6F5 100%)',
    padding: theme.spacing(8, 0)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
}));


const Members = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()

  return (
    <main id='members' className={classes.root}>
      <div className={clsx(classes.container, commonClasses.containerWidth)}>
        <img
          alt='divider'
          src={DIVIDER_ICON_IMAGE_PATH}
          className={classes.divider}
        />
        <Typography
          align='center'
          className={classes.title}
        >
          AVentures <span>DAO Members</span>
        </Typography>
        <Typography variant='h5' align='center' >
          Crypto veterans, key opinion leaders and developers
        </Typography>
        <MemberCarousel members={MEMBERS} />
      </div>
    </main>
  )
}

export default memo(Members)