import { createContext, useContext, useState } from 'react'

const DataSubmitContext = createContext({})

const DataSubmitProvider = ({ children }) => {
  const [accountOpeningData, setAccountOpeningData] = useState({
    names: [],
    address_Info: {
      country_of_origin: '',
      state_of_origin: '',
      state_of_origin_lga: '',
      country_of_residence: '',
      state_of_residence: '',
      state_of_residence_lga: '',
      address: '',
      office_address: '',
      email: '',
      phones: [],
      imageUrl: ''
    },
    other_Info: {
      age: '',
      gender: '',
      marital_status: '',
      account_officer: '',
      occupation: '',
      sector: '',
      educational_level: ''
    },
    account_Info: {
      bank_name: '',
      account_name: '',
      account_number: '',
      bvn: ''
    },
    nok: {
      names: [],
      address_Info: {
        country: '',
        state_of_origin: '',
        state_of_origin_lga: '',
        country_of_residence: '',
        state_of_residence: '',
        state_of_residence_lga: '',
        address: '',
        office_address: '',
        email: '',
        phones: []
      },
      other_Info: {
        imageUrl: '',
        age: '',
        gender: '',
        marital_status: '',
        relationship: '',
        occupation: '',
        sector: ''
      },
      account_Info: {
        bank_name: '',
        account_name: '',
        account_number: '',
        bvn: ''
      }
    }
  })
  function handleImageUpload(event, setPostingUrl, path) {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      setPostingUrl((prev) => {
        const keys = path.split('.')
        const currentState = { ...prev }
        keys.reduce((o, i, index) => {
          if (index === keys.length - 1) {
            return (o[i] = reader.result)
          } else {
            return o[i]
          }
        }, currentState)
        return currentState
      })
      console.log(reader.result)
    }
    reader.readAsDataURL(file)
  }

  async function handleSubmit(event, body) {
    event.preventDefault()
    console.log(event.target)
    console.log(body)
    try {
      const apis = await window.api.createSavingsAccount(body)
      console.log(apis)
    } catch (error) {
      console.error(error)
    }
  }

  function controledValue(path, currentIndex) {
    const paths = path.split('.')
    return paths.reduce((o, i, index) => {
      if (index === paths.length - 1) {
        if (Array.isArray(o[i])) {
          if (currentIndex !== undefined) {
            return o[i][currentIndex]
          } else {
            return o[i]
          }
        } else {
          return o[i]
        }
      } else {
        return o[i]
      }
    }, accountOpeningData)
  }

  const handleChange = (event, setData, nameIndex, reset) => {
    console.log(event)
    const { name, value } = !reset ? event.target : event
    console.log('this is name:', name)
    setData((prevState) => {
      const keys = name.split('.')
      console.log(name.split('.'))
      let updatedState = { ...prevState }
      let temp = updatedState
      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          if (Array.isArray(temp[key])) {
            temp[key][nameIndex] = value
            console.log(temp[key])
          } else {
            temp[key] = !reset ? value : ''
          }
        } else {
          temp[key] = { ...temp[key] }
          temp = temp[key]
        }
      })
      console.log(updatedState)
      console.log(updatedState.name)
      return updatedState
    })
  }

  return (
    <DataSubmitContext.Provider
      value={{
        handleSubmit,
        handleChange,
        controledValue,
        handleImageUpload,
        accountOpeningData,
        setAccountOpeningData
      }}
    >
      {children}
    </DataSubmitContext.Provider>
  )
}

export function HandleSubmitDataContext() {
  return useContext(DataSubmitContext)
}
export default DataSubmitProvider
