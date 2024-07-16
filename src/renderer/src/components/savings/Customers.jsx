import React, { useEffect, useState } from 'react'
import Table from '../table_component/Table'

const Customers = () => {
  const [customerData, setCustomerData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await window.api.getData('customers')
        console.log('Fetched data:', data)
        setCustomerData(
          data.map((ele, index) => ({
            'User ID': `ID-${index + 1}`,
            FullName: ele.names.map((ele) => ele.toUpperCase()).join(' '),
            Contact: ele.address_Info.phones[0],
            Email: ele.address_Info.email
          }))
        )
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])
  if(customerData.length === 0 ){
    return ""
  }
  return (
    <div className="w-full h-full">
      <Table tableData={customerData} process={true} />
    </div>
  )
}

export default Customers
