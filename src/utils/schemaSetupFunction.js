function namesFieldValidator(value) {
  const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  if (value.some((names) => specialCharsRegex.test(names)))
    throw new Error('Special characters are not allowed')
  if (value.some((names) => names.length > 15)) throw new Error('Name of customer is too long')
}

function numberFieldSchemaSetup(len, types) {
  if (types === 'contact') {
    return {
      type: [String],
      validate: {
        validator: (value) => validateNumberLength(value, len),
        message: 'Number must not be less or greater than 11'
      }
    }
  } else {
    return {
      type: String,
      validate: {
        validator: (value) => validateNumberLength(value, len),
        message: 'Number must not be less or greater than 11'
      }
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

function validateNumberLength(value, len, types) {
  if (types === 'contact') {
    return value.some((numbers) => numbers.length !== len)
  } else {
    return value.length !== len
  }
}

function otherInfo(mongoose) {
  return {
    age: {
      type: String
    },
    gender: { type: String, enum: ['Male', 'Female'] },
    marital_status: { type: String, enum: ['Married', 'Single', 'Divorced'] },
    account_officer: {
      type: String
    },
    occupation: { type: String },
    sector: { type: String }
  }
}

function addressInfo() {
  return {
    country_of_origin: {
      type: String
    },
    state_of_origin: { type: String },
    state_of_origin_lga: { type: String },
    country_of_residence: {
      type: String
    },
    state_of_residence: { type: String },
    state_of_residence_lga: { type: String },
    address: { type: String },
    office_address: { type: String },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (value) {
          // Custom validation logic for email format
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        },
        message: 'Invalid email format'
      }
    },
    phones: [numberFieldSchemaSetup(11, 'contact')],
    imageUrl: {
      type: String
    }
  }
}

function bankInfo() {
  return {
    bank_name: nameFieldSchemaSetup(),
    account_name: nameFieldSchemaSetup(),
    account_number: numberFieldSchemaSetup(10),
    bvn: numberFieldSchemaSetup(11)
  }
}

export { numberFieldSchemaSetup, nameFieldSchemaSetup, otherInfo, addressInfo, bankInfo }
