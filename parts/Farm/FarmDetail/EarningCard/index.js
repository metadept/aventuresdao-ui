
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { useFarm } from 'contexts/farm-context'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import { CABBAGE_GROUP_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: theme.custom.palette.border,
    margin: theme.spacing(2, 2, 5)
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 24,
    padding: theme.spacing(5, 2, 2),
    backgroundColor: theme.palette.background.default
  },
  balance: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)
  },
  image: {
    position: 'absolute',
    top: -30
  }
}));

const EarningCard = ({
  farm
}) => {
  const classes = useStyles()
  const { onHarvest } = useFarm()

  const harvestHandler = () => {
    onHarvest(farm)
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        Earning Cabbage
      </Typography>

      <div className={classes.container}>
        <img
          alt='cabbage-group'
          src={CABBAGE_GROUP_IMAGE_PATH}
          className={classes.image}
        />
        <Typography
          variant='h5'
          align='center'
          className={classes.balance}
        >
          {parseFloat(farm.rewardTokenEarned).toFixed(8).toLocaleString()}
        </Typography>
        <ContainedButton onClick={harvestHandler}>
          Harvest
        </ContainedButton>
      </div>
    </div>
  )
}

export default memo(EarningCard)