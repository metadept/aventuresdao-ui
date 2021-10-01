
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
}));

const WithdrawForm = ({
  farm
}) => {
  const classes = useStyles()
  const { onWithdraw } = useFarm()

  const { control, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    await onWithdraw(data.balance, farm)
    setValue('balance', '')
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
            Withdraw
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Controller
            as={<AvawareTextField />}
            name='balance'
            label='Farm'
            placeholder='0'
            onMax={() => setValue('balance', farm.stakedBalance)}
            balance={parseFloat(farm.stakedBalance).toFixed(8).toLocaleString()}
            error={errors.balance?.message}
            control={control}
            defaultValue={''}
          />
        </Grid>

        <Grid item xs={12}>
          <ContainedButton type='submit' fullWidth>
            Withdraw
          </ContainedButton>
        </Grid>
      </Grid>
    </form>
  )
}

export default memo(WithdrawForm)