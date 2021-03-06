
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  OutlinedInput
} from '@material-ui/core'
import clsx from 'clsx'

import ContainedButton from 'components/UI/Buttons/ContainedButton'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  textField: {
    width: '100%',
    border: `1px solid ${theme.custom.palette.border}`,
    borderRadius: 5,
  },
  input: {
    fontSize: 16,
    fontFamily: 'roboto, sans-serif',
    lineHeight: 'normal',
    padding: theme.spacing(1.5),
    color: theme.palette.text.primary,
    '&:focus': {
      backgroundColor: 'unset'
    },
    '&::placeholder': {
      lineHeight: 'normal',
      color: theme.palette.text.primary
    },
    '&:-ms-input-placeholder': {
      lineHeight: 'normal',
      color: theme.palette.text.primary
    },
    '&::-ms-input-placeholder': {
      lineHeight: 'normal',
      color: theme.palette.text.primary
    },
    '&[type=number]': {
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      },
      MozAppearance: 'textfield'
    }
  },
  multiline: {
    padding: 0
  },
  notchedOutline: {
    border: 'none'
  },
  errorInput: {
    border: `1px solid ${theme.palette.danger.main}`
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  error: {
    color: theme.palette.danger.main
  },
  label: {
    color: theme.custom.palette.border
  },
  maxButton: {
    fontSize: 12,
    fontWeight: 'bold',
    minWidth: 'unset',
    padding: theme.spacing(0, 1),
  },
}));

const AvawareTextField = React.forwardRef(({
  label,
  balance,
  type = 'text',
  error,
  onMax,
  className,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {!!label &&
        <div className={classes.labelContainer}>
          <Typography className={classes.label}>
            {label}:
          </Typography>
          <Typography>
            {balance}
          </Typography>
        </div>
      }
      <OutlinedInput
        inputRef={ref}
        variant='outlined'
        type={type}
        error={!!error}
        className={clsx(
          'form-control form-control-lg',
          classes.textField
        )}
        classes={{
          input: classes.input,
          multiline: classes.multiline,
          error: classes.errorInput,
          notchedOutline: classes.notchedOutline
        }}
        endAdornment={
          onMax
            ? (
              <ContainedButton
                color='secondary'
                className={classes.maxButton}
                onClick={onMax}
              >
                MAX
              </ContainedButton>
            ) : null
        }
        {...rest}
      />
      {!!error &&
        <Typography
          variant='subtitle2'
          className={classes.error}
        >
          {error}
        </Typography>
      }
    </div>
  );
});

export default memo(AvawareTextField);