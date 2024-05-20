import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { HandleLayoutDesign } from '../../context/layoutDesignContext'
import SideNavNavigator from './navigator/SideNavNavigator'

const SideMenu = () => {
  const navigate = useNavigate()
  const { mode } = HandleLayoutDesign()
 
  return (
    <div
      style={{ '--current-color': mode ? '#121212' : '#F1F5F9' }}
      className="bg-white  dark:bg-darkmode-2 w-[15%] h-full smscreen:block hidden"
    >
      <div className="w-full h-[15%]  flex justify-center items-center p-2">
        <div className="w-full  h-[100%] dark:border-slate-600 border-y  gap-3    flex  items-center">
          <div className="w-[40px] drop-shadow-xl bg-white h-[40px] rounded-[50%]"></div>
          <div className="font-bold   flex drop-shadow-xl flex-col justify-center items-center">
            <div className="flex-shrink">Damilola Jibowu</div>
            <div className="text-sm font-medium ">IT DEPT</div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full h-[85%] pl-2 flex flex-col dark:border-0 justify-between py-5">
        <SideNavNavigator/>
        <div className="w-full items-center flex flex-col h-[20%] ">
          <div className="h-1/2  flex w-full justify-center items-center text-2xl">
            <div
              onClick={() => navigate('/login')}
              className="border w-1/2 dark:border-slate-600 flex justify-center text-sm gap-3 p-2 items-center rounded hover:text-green-600 cursor-pointer  duration-300 hover:drop-shadow-md"
            >
              <FaSignOutAlt /> <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
