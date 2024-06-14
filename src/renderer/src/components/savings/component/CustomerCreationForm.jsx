import { useState } from 'react'
import NameSpace from '../../form_component/NameSpace'
import OtherInfo from '../../form_component/OtherInfo'
import AccountInfo from '../../form_component/AccountInfo'
import AddressInfo from '../../form_component/AddressInfo'
import NextOfKin from './NextOfKin'

const CustomerCreationForm = ({ loan }) => {
  return (
    <fieldset className="w-full p-5  h-auto rounded-2xl border ">
      <legend className="ml-5 mb-4 font-bold text-lg">Create Customer</legend>
      <section className="flex flex-col gap-8">
        <div className="w-full rounded-xl bg-green-600 h-[5px]"></div>
        <section className="flex flex-col gap-5 border rounded-2xl p-5">
          <NameSpace path={'names'} />
          <hr />
          <OtherInfo path={'other_Info'} />
          <AddressInfo path={'address_Info'} />
        </section>
        <AccountInfo path={'account_Info'} />
        <section className="">{!loan ? '' : <NextOfKin />}</section>
      </section>
    </fieldset>
  )
}

export default CustomerCreationForm
