import mongoose from 'mongoose'
import { errorConsole, infoConsole } from '../utils/logger'
import {
  nameFieldSchemaSetup,
  otherInfo,
  addressInfo,
  bankInfo
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
  names: nameFieldSchemaSetup(),
  address_Info: addressInfo(mongoose),
  other_Info: otherInfo(mongoose),
  account_Info: bankInfo(),
  nok: {
    names: nameFieldSchemaSetup(),
    address_Info: addressInfo(mongoose),
    other_Info: otherInfo(mongoose),
    account_Info: bankInfo(),
    relationship: {
      type: String,
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
    }
  },
  accounts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: ''
    }
  ],
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
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  amount: { type: Number },
  interest_rate: { type: Number },
  term_months: { type: Number },
  start_date: { type: Date },
  end_date: { type: Date },
  status: { type: String, enum: ['Pending', 'Active', 'Closed', 'Restructured'] },
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
    type: mongoose.Schema.Types.ObjectId,
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
