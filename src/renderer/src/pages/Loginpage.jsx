import Login from '../components/Login'
import Loginillustrator from '../assets/svgs/loginsvgs/Loginillustrator'
import Logo from '../assets/Logo'

const Loginpage = () => {
  return (
    <div className="lg:flex p-5 overflow-hidden rounde items-center bg-white w-full h-full justify-center">
      <div className="w-full relative h-full flex justify-center items-center">
        <div className="w-[30rem] h-[30rem] absolute rounded-[50%] border-dotted  border-[3em] -bottom-[14rem] -left-[14rem] "></div>
        <div className="w-[25rem] h-[25rem] absolute rounded-[50%] border-dotted  border-[2em] -bottom-[15rem] border-green-500/40 -left-[2rem] "></div>
        <Login />
      </div>
      <div className="w-full lg:flex hidden justify-center items-center h-full">
        <div className="w-full relative overflow-hidden rounded-2xl p- bg-green-500  flex justify-center items-center h-full">
          <div className="absolute top-0 text-white left-0 p-5">
            <Logo width={'50px'} />
          </div>
          <div className="absolute w-[20rem]  h-[20rem]   border -bottom-[-30rem] -left-[10rem] rounded-[50%]"></div>
          <div className="absolute w-[20rem] h-[20rem] -bottom-[10rem] -right-[10rem] border-dotted border-[30px] rounded-[50%]"></div>
          <div>
            <Loginillustrator />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
