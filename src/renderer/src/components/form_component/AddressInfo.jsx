import React from 'react'
import { HandleSubmitDataContext } from '../../context/dataSubmitContext'

const AddressInfo = ({ path }) => {
  const { handleChange, setAccountOpeningData, controledValue, handleImageUpload } =
    HandleSubmitDataContext()
  return (
    <section className="flex flex-col gap-8 w-full items-center p-3  border rounded-2xl">
      <section className="flex flex-col gap-3 w-full ">
        <section className="flex justify-between">
          <div className="gap-5 flex items-center justify-between">
            <label htmlFor="country_of_origin">Country(Birth):</label>
            <select
              name={`${path}.country_of_origin`}
              id="country_of_origin"
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.country_of_origin`)}
            >
              <option value="">--Choose--</option>
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
          <div className="gap-5 flex items-center justify-between">
            <label htmlFor="stateoforigin">State(Birth):</label>
            <select
              name={`${path}.state_of_origin`}
              id="stateoforigin"
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.state_of_origin`)}
            >
              <option value="">--Choose--</option>
              <option value="Ogun">Ogun</option>
            </select>
          </div>
          <div className="gap-5 flex items-center justify-between">
            <label htmlFor="lga">Lga(Birth):</label>
            <select
              name={`${path}.state_of_origin_lga`}
              id="lga"
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.state_of_origin_lga`)}
            >
              <option value="">--Choose--</option>
              <option value="Ode">Ode</option>
            </select>
          </div>
        </section>
        <section className="flex justify-between">
          <div className="gap-1 flex items-center justify-between">
            <label htmlFor="residecountry">Country(Resides):</label>
            <select
              name={`${path}.country_of_residence`}
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.country_of_residence`)}
              id="residecountry"
            >
              <option value="">--Choose--</option>
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
          <div className="gap-5 flex items-center justify-between">
            <label htmlFor="residestate">State(Resides):</label>
            <select
              name={`${path}.state_of_residence`}
              id="residestate"
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.state_of_residence`)}
            >
              <option value="">--Choose--</option>
              <option value="Lagos">Lagos</option>
            </select>
          </div>
          <div className="gap-5 flex items-center justify-between">
            <label htmlFor="residelga">Lga(Resides):</label>
            <select
              name={`${path}.state_of_residence_lga`}
              id="residelga"
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.state_of_residence_lga`)}
            >
              <option value="">--Choose--</option>
              <option value="Ilasamaja">Ilasamaja</option>
            </select>
          </div>
        </section>
        <hr />
      </section>
      <section className="flex h-full  justify-between w-full gap-3">
        <div className="flex w-full flex-col gap-4">
          <div className="w-full flex items-center  justify-between">
            <label htmlFor="customeremail">Email:</label>
            <input
              className="w-[85%]"
              type="email"
              id="customeremail"
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.email`)}
              name={`${path}.email`}
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <label htmlFor="customeraddress">Address:</label>
            <input
              className="w-[85%]"
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.address`)}
              type="text"
              id="customeraddress"
              name={`${path}.address`}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="officeaddress">Office Address:</label>
            <input
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.office_address`)}
              className="w-[85%]"
              type="text"
              name={`${path}.office_address`}
              id="officeaddress"
            />
          </div>
          <div className="flex items-center w-full justify-between">
            <label htmlFor="contact1">Contact 1:</label>
            <input
              className="w-[70%]"
              onChange={(event) => handleChange(event, setAccountOpeningData, 0)}
              value={controledValue(`${path}.phones`, 0)}
              type="tel"
              id="contact1"
              name={`${path}.phones`}
            />
          </div>
          <div className="flex items-center w-full justify-between">
            <label htmlFor="contact2">Contact 2:</label>
            <input
              className="w-[70%]"
              onChange={(event) => handleChange(event, setAccountOpeningData, 1)}
              value={controledValue(`${path}.phones`, 1)}
              type="tel"
              id="contact2"
              name={`${path}.phones`}
            />
          </div>
        </div>
        <div className="w-full h-full flex items-center gap-5 self-center justify-center">
          <div>
            <label htmlFor="customerimage"> Customer Image</label>
            <input
              type="file"
              onChange={(event) =>
                handleImageUpload(event, setAccountOpeningData, `${path}.imageUrl`)
              }
              id="customerimage"
              name={`${path}.imageUrl`}
            />
          </div>
          <div className="w-[100px] border dark:border-slate-600 h-[100px] rounded-2xl"></div>
        </div>
      </section>
    </section>
  )
}

export default AddressInfo
