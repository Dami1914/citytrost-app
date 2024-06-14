import React, { useEffect, useState } from 'react'
import Table from '../table_component/Table'

const Customers = () => {
  const [customerData, setCustomerData] = useState([])
  async function fetchData() {
    try {
      const data = await window.api.getData('customers')
      console.log(data)
      setCustomerData((prev) => {
        return data.map((ele) => {
          return {
            'User ID': '001',
            FullName: 'Damilola Jibowu'
          }
        })
      })
    } catch (error) {
      console.error
    }
  }
  const tableData = [
    {
      'User ID': '001',
      FullName: 'Damilola jibowu',
      Branch: 'Mushin',
      Position: 'IT',
      Contact: 9133909108,
      Email: 'damilola.jibowu@gmail.com',
      Status: false
    }
  ]
  useEffect(() => {
    fetchData()
    console.log('this happens to be', customerData)
  })

  return (
    <div className="w-full h-full">
      <Table tableData={tableData} process={true} />
    </div>
  )
}

export default Customers
