import { useEffect, useState, useRef } from 'react'
import DashboardSwitcher from './dashboard_componnet/buttons/DashboardSwitcher'

const DisplayMapComponents = ({ componentData }) => {
  const componentRefs = useRef([])
  const [activeDashboard, setActiveDashboard] = useState(componentData[0].name)
  const buttonRefs = useRef([])

  function handleDashBoardNav(ele) {
    setActiveDashboard(ele)
  }

  useEffect(() => {
    buttonRefs.current.forEach((elem, index) => {
      console.log('button ref', buttonRefs.current[index])
      elem.classList.remove('activeDashboardButton')
    })

    buttonRefs?.current[
      componentData.findIndex((ele) => ele.name === activeDashboard)
    ].classList.add('activeDashboardButton')
  }, [activeDashboard, componentData])

  useEffect(() => {
    componentRefs.current.forEach((ele) => {
      if (ele.id === activeDashboard) {
        ele.classList.add('activeDashboard')
      } else {
        ele.classList.remove('activeDashboard')
      }
    })
  })

  return (
    <div className="w-full relative overflow-x-hidden overflow-y-scroll rounded-xl scrollbar-hide bg-lightmode-1 dark:bg-darkmode-2 h-full">
      <section className="w-full z-[5] gap-4 px-5 border-y border-t-0 p-2 flex h-[8%] backdrop-filter backdrop-blur-xl top-0 m-0 sticky">
        {componentData.map((ele, index) => (
          <DashboardSwitcher
            key={`${ele}${index}`}
            handleRef={buttonRefs}
            index={index}
            handleClick={(event) => handleDashBoardNav(ele.name, event)}
            data={ele}
          />
        ))}
      </section>
      {componentData.map((ele, index) => (
        <div
          key={`${index}${ele}`}
          id={ele.name}
          ref={(ref) => (componentRefs.current[index] = ref)}
          className="w-full h-[100%] z-[3] opacity-0 absolute dashboard translate-x-[90vw] p-5 flex gap-5 flex-col"
        >
          {ele.component}
        </div>
      ))}
    </div>
  )
}

export default DisplayMapComponents
