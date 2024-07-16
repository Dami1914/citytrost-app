/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { IoCheckmarkDone } from 'react-icons/io5'
import { FiTrendingUp } from 'react-icons/fi'
import { PiTrendDownBold } from 'react-icons/pi'
import { FcCancel } from 'react-icons/fc'
import { FiEdit } from 'react-icons/fi'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { HandleLayoutDesign } from '../../context/layoutDesignContext'
import TablePopUpManager from './sub_table_component/TablePopUpManager'

const TableRow = ({ elem, operation, rowRefs, popUpTypePath, index }) => {
  const nodeRef = useRef(null)
  const rowRef = useRef([]) // Correctly initialize useRef
  const [showpopup, setShowpopup] = useState(false)
  const [showRow, setShowRow] = useState(true)

  const { mode } = HandleLayoutDesign()

  function handleDelete(event) {
    event.stopPropagation()
    alert('want to delete user')
  }

  const handleClickOutside = (event) => {
    const { classList } = event.target
    console.log(nodeRef.current)
    if (!nodeRef.current.contains(event.target) && !classList.contains('entered')) {
      setShowpopup(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      handleClickOutside(event, rowRefs)
    })
    return () => {
      document.removeEventListener('mousedown', (event) => {
        handleClickOutside(event, rowRefs)
      })
    }
  }, [])

  function showPopup(event) {
    console.log(event.target)
    setShowpopup(true)
  }

  useEffect(() => {
    if (rowRef.current) {
      rowRef.current.forEach((ele) => {
        if (ele.innerText.length > 15) {
          ele.classList.add('tooltip')
        }
      })
    }
    console.log(mode)
  }, [])
  console.log('row mode is', mode)
  return (
    <tr
      style={{ '--current-row-color': mode ? '#121212 !important' : '#F1F5F9' }}
      id={`${index}row`}
      className="font-bold bg-white row w-full dark:bg-darkmode-2 cursor-pointer dark:text-slate-400 dark:hover:bg-darkmode-1 dark:hover:text-slate-300 hover:bg-green-50 hover:text-green-800"
      ref={(ref) => (rowRefs.current[index] = ref)}
      onClick={(event) => showPopup(event)}
    >
      {showRow && (
        <>
          {Object.values(elem).map((ele, index) =>
            Object.keys(elem).indexOf('Status') === index ? (
              <td className="text-center p-2" key={index}>
                <div className="flex rounded justify-center text-xl">
                  {!operation ? (
                    ele ? (
                      <div className="text-green-600">
                        <FiTrendingUp />
                      </div>
                    ) : (
                      <div className="text-red-600">
                        <PiTrendDownBold />
                      </div>
                    )
                  ) : ele ? (
                    <div className="text-green-600">
                      <IoCheckmarkDone />
                    </div>
                  ) : (
                    <div className="text-red-700">
                      <FcCancel />
                    </div>
                  )}
                </div>
              </td>
            ) : (
              <td
                ref={(td) => (rowRef.current[index] = td)} // Correctly assign ref
                className="text-center p-2 relative overflow-hidden"
                key={index}
              >
                {ele}
              </td>
            )
          )}
          {operation && (
            <td className="text-center p-2 flex gap-2 justify-center">
              <div className="rounded flex items-center text-md cursor-pointer hover:bg-transparent text-green-600 px-3">
                <div onClick={(event) => console.log('Edit clicked')}>
                  <FiEdit />
                </div>
              </div>
              <div
                onClick={(event) => handleDelete(event)}
                className="text-red-700  flex items-center rounded text-xl cursor-pointer hover:bg-transparent px-3"
              >
                <div className="w-full h-full">
                  <MdOutlineDeleteForever />
                </div>
              </div>
            </td>
          )}
        </>
      )}
      <CSSTransition
        in={showpopup}
        timeout={500}
        classNames="popups"
        nodeRef={nodeRef}
        unmountOnExit
        onEnter={() => setShowRow(false)}
        onExited={() => setShowRow(true)}
      >
        {(state) =>
          createPortal(
            <TablePopUpManager
              state={state}
              elem={elem}
              popUpTypePath={popUpTypePath}
              nodeRef={nodeRef}
            />,
            document.body
          )
        }
      </CSSTransition>
    </tr>
  )
}

export default TableRow
