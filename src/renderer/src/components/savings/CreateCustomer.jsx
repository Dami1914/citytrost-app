import React from 'react'
import CustomerCreationForm from './component/CustomerCreationForm'
import NextOfKin from './component/NextOfKin'
import FormButton from '../form_component/FormButton'
import { HandleSubmitDataContext } from '../../context/dataSubmitContext'

const CreateCustomer = () => {
  const { handleSubmit,accountOpeningData } = HandleSubmitDataContext()
  const buttons = ['Submit', 'Cancel']
  return (
    <form
      onSubmit={(event) => handleSubmit(event,accountOpeningData)}
      className="w-full flex flex-col gap-5 p-2 pb-[4rem]"
    >
      <CustomerCreationForm />
      <NextOfKin />
      <FormButton buttons={buttons} />
    </form>
  )
}

export default CreateCustomer
