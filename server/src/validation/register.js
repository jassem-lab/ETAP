const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name cannot be Empty';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is Required !';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid ! ';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is Required !';
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password is Required ! ';
  }
  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = 'Password must be at least 8 characters ! ';
  }
  if (!Validator.isEquals(data.password, data.password2)) {
    errors.password2 = 'Password must Match ! ';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
