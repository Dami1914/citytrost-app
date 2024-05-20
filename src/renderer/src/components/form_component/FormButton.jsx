import React from 'react'

const FormButton = ({buttons}) => {
    const style = {
        backgroundColor: 
    }
  return (
    <div className='w-full flex items-center justify-around'>
        {
            buttons.map((ele)=>{
                return <button style={{backgroundColor: ele=== }} type="button">{ele}</button>
            })
        }
    </div>
  )
}

export default FormButton