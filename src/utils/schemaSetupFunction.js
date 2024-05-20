function namesFieldValidator(value) {
  const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  if (value.some((names) => specialCharsRegex.test(names)))
    throw new Error('Special characters are not allowed')
  if (value.some((names) => names.length > 15)) throw new Error('Name of customer is too long')
}

function addressFieldSchemaValidator() {
  return {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    postal_code: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  }
}

function numberFieldSchemaSetup(len) {
  return {
    required: true,
    type: [String],
    validate: {
      validator: (value) => validateNumberLength(value, len),
      message: 'Number must not be less or greater than 11'
    }
  }
}

function nameFieldSchemaSetup() {
  return {
    unique: true,
    type: [String],
    validate: {
      validator: (value) => namesFieldValidator(value)
    }
  }
}

function validateNumberLength(value, len) {
  return value.some((numbers) => numbers.length !== len)
}

export {
  addressFieldSchemaValidator,
  numberFieldSchemaSetup,
  nameFieldSchemaSetup
}
