import React from 'react'

const FormButton = ({ buttons }) => {
  return (
    <div className="w-full flex mb-10  justify-end gap-5">
      {buttons.map((ele, index) => {
        return (
          <button
            className={`btn${index}`}
            key={index + 'button'}
            type="submit"
          >
            {ele}
          </button>
        )
      })}
    </div>
  )
}

export default FormButton
