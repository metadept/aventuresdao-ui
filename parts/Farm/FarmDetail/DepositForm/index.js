
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useFarm } from 'contexts/farm-context'
import AvawareTextField from 'components/UI/TextFields/AvawareTextField'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import { BALANCE_VALID } from 'utils/constants/validations'

const schema = yup.object().shape({
  balance: BALANCE_VALID
});

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 24,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.main,
  }
}));

const DepositForm = ({
  farm
}) => {
  const classes = useStyles()
  const { onStake } = useFarm()

  const { control, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    await onStake(data.balance, farm)
    setValue('balance', '')
  }

  const onMax = () => {
    setValue('balance', farm.balance)
  }

  return (
    <form
      noValidate
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <Typography align='center'>
            Deposit
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Controller
            as={<AvawareTextField />}
            name='balance'
            label='Wallet'
            placeholder='0'
            balance={parseFloat(farm.balance).toFixed(8).toLocaleString()}
            onMax={onMax}
            error={errors.balance?.message}
            control={control}
            defaultValue={''}
          />
        </Grid>

        <Grid item xs={12}>
          <ContainedButton
            disabled={farm.decomissioned}
            type='submit'
            fullWidth
          >
            Stake
          </ContainedButton>
        </Grid>

        <Grid item xs={12}>
          <a href={farm.link} target='_blank' rel='noreferrer' className={classes.link}>
            {farm.name}
          </a>
        </Grid>
      </Grid>
    </form>
  )
}

export default memo(DepositForm)