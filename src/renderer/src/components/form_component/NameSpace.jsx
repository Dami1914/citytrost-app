import { HandleSubmitDataContext } from '../../context/dataSubmitContext'
const NameSpace = ({ path }) => {
  const { handleChange, accountOpeningData, setAccountOpeningData,controledValue } = HandleSubmitDataContext()
  console.log(path)
  console.log(accountOpeningData)
  
  return (
    <div className="flex gap-5">
      <div className="w-full flex items-center justify-between">
        <label htmlFor="firstname">First Name:</label>
        <input
          onChange={(event) => handleChange(event, setAccountOpeningData, 0)}
          value={controledValue(path,0)}
          className="w-[70%]"
          type="text"
          id="firstname"
          name={path}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <label htmlFor="middlename">Middle Name:</label>
        <input
          onChange={(event) => handleChange(event, setAccountOpeningData, 1)}
          value={controledValue(path,1)}
          className="w-[70%]"
          type="text"
          id="middlename"
          name={path}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <label htmlFor="lastname">Last Name:</label>
        <input
          onChange={(event) => handleChange(event, setAccountOpeningData, 2)}
          value={controledValue(path,2)}
          className="w-[70%]"
          type="text"
          id="lastname"
          name={path}
        />
      </div>
    </div>
  )
}

export default NameSpace
