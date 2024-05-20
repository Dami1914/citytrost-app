import mongoose from 'mongoose'
import { errorConsole, infoConsole } from '../utils/logger'
import {
  addressFieldSchemaValidator,
  numberFieldSchemaSetup,
  nameFieldSchemaSetup
} from '../utils/schemaSetupFunction.js'

async function mongooseConnect(...arg) {
  console.log(...arg)
  try {
    const resolved = await mongoose.connect(...arg)
    console.log()
    infoConsole('database connected successfully')
    return resolved
  } catch (error) {
    errorConsole("couldn't connect to database")
  }
}

const customerSchema = new mongoose.Schema({
  // Use Mongoose's default ObjectIds for customer ID
  _id: mongoose.Schema.Types.ObjectId,
  names: nameFieldSchemaSetup(),
  age: Number,
  gender: { type: String, enum: ['Male', 'Female'] },
  marital_status: { type: String, enum: ['Married', 'Single', 'Divorced'] },
  imageUrl: { String },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Custom validation logic for email format
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      },
      message: 'Invalid email format'
    }
  },
  state_of_origin: String,
  other_Info:{

  },

  phones: [numberFieldSchemaSetup(11)],
  next_of_kin: {
    names: nameFieldSchemaSetup(),
    phone: [numberFieldSchemaSetup(11)],
    age: Number,
    gender: { type: String, enum: ['Male', 'Female'] },
    marital_status: { type: String, enum: ['Married', 'Single', 'Divorced'] },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          // Custom validation logic for email format
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        },
        message: 'Invalid email format'
      }
    },
    imageUrl: { String },
    relationship: {
      type: String,
      required: true,
      enum: [
        'Brother',
        'Sister',
        'Father',
        'Mother',
        'Uncle',
        'Son',
        'Daughter',
        'Wife',
        'Aunty',
        'Niece',
        'Friend',
        'Nephew'
      ]
    },
    address: addressFieldSchemaValidator()
  },
  account_officerId: [
    {
      type: mongoose.Schema.Types.ObjectId // Use ObjectIds for account officer IDs (optional)
    }
  ],
  bank_info: {
    bank_name: nameFieldSchemaSetup(),
    account_name: nameFieldSchemaSetup(),
    account_number: numberFieldSchemaSetup(10),
    bvn: numberFieldSchemaSetup(11)
  },
  office_address: addressFieldSchemaValidator(),
  address: addressFieldSchemaValidator(),
  loans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Loan'
    }
  ],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

const loanSchema = new mongoose.Schema({
  // Use Mongoose's default ObjectIds for loan ID
  _id: mongoose.Schema.Types.ObjectId,
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  amount: Number,
  interest_rate: Number,
  term_months: Number,
  start_date: Date,
  end_date: Date,
  status: { type: String, enum: ['pending', 'active', 'closed'] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

// Payment Schema (remains unchanged)
const paymentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // You might consider using ObjectIds here as well
  loan_id: {
    type: mongoose.Schema.Types.ObjectId, // Use Mongoose's ObjectId type
    ref: 'Loan'
  },
  customer_id: {
    type: String,
    ref: 'Customer'
  },
  amount: Number,
  payment_date: Date,
  status: { type: String, enum: ['paid', 'unpaid'] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

const Customer = mongoose.model('customer', customerSchema)
const Loan = mongoose.model('loan', loanSchema)
const Payment = mongoose.model('payment', paymentSchema)

export { Customer, Loan, Payment, mongooseConnect, mongoose }
