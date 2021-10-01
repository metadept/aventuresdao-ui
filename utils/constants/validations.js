
import * as yup from 'yup'

const BALANCE_VALID = yup.string()
  .required('Please input field.');

export {
  BALANCE_VALID
};