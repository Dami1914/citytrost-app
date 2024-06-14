import NameSpace from '../../form_component/NameSpace'
import OtherInfo from '../../form_component/OtherInfo'
import AddressInfo from '../../form_component/AddressInfo'
import AccountInfo from '../../form_component/AccountInfo'

const NextOfKin = () => {
  return (
    <fieldset className="rounded-2xl border rounded-2xl p-4">
      <legend>Next Of kin</legend>
      <section className="w-full flex flex-col gap-3 ">
        <NameSpace path={'nok.names'} />
        <hr />
        <OtherInfo path={'nok.other_Info'} NextOfKin={true} />
        <AddressInfo path={'nok.address_Info'} />
        <AccountInfo path={'nok.account_Info'} />
      </section>
    </fieldset>
  )
}

export default NextOfKin
