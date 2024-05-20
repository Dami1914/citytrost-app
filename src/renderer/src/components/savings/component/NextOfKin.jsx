import React from 'react'
import NameSpace from '../../form_component/NameSpace'
import OtherInfo from '../../form_component/OtherInfo'
import AddressInfo from '../../form_component/AddressInfo'
import AccountInfo from '../../form_component/AccountInfo'

const NextOfKin = () => {
  return (
    <fieldset className="rounded-2xl border rounded-2xl p-4">
      <legend>Next Of kin</legend>
      <section className="w-full flex flex-col gap-3 ">
        <NameSpace />
        <hr />
        <OtherInfo NextOfKin={true} />
        <AddressInfo/>
        <AccountInfo/>
      </section>
    </fieldset>
  )
}

export default NextOfKin
