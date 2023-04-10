import Image from 'next/image'
import navPhone from 'assets/images/bg-sidebar-mobile.svg'
import navDesktop from 'assets/images/bg-sidebar-desktop.svg'

type NavProps = {
  formContent: number
}

let screenW = document.documentElement.clientWidth

const Nav = ({formContent}: NavProps) => {

  return (
    <nav className="w-full md:w-full h-52 md:h-full top-0 md:top-auto fixed md:relative md:col-start-1 md:col-span-1 md:row-span-3 lg:row-span-6 text-white" >
        <Image src={screenW < 768 ? navPhone : navDesktop} alt="" className="w-full h-full object-cover absolute mix-blend-overlay md:mix-blend-normal md:rounded-xl" />
        <ol className="text-xl flex md:flex-col justify-around items-center m-auto w-52 border-black mt-8 md:w-3/4 md:h-1/2 md:relative">
            { formContent === 1 ? 
            <div className="md:flex md:justify-start md:items-center  md:w-full md:gap-3">
              <li className="nav1 bg-blue-200 font-semibold rounded-full w-10 h-10 xl:w-12 xl:h-12 flex justify-center items-center text-black xl:text-2xl">1</li>
              <div className="hidden md:flex md:flex-col md:leading-none">
                <h3 className="text-sm xl:text-base opacity-70">STEP 1</h3>
                <h3 className="font-semibold text-base xl:text-lg">YOUR INFO</h3>
              </div>
            </div>
            : 
            <div className="md:flex md:justify-start md:items-center md:w-full md:gap-3">
              <li className="nav1 font-semibold rounded-full border-2 w-10 h-10 xl:w-12 xl:h-12 flex justify-center items-center text-white xl:text-2xl">1</li>
              <div className="hidden md:flex md:flex-col md:leading-none">
                <h3 className="text-sm xl:text-base opacity-70">STEP 1</h3>
                <h3 className="font-semibold text-base xl:text-lg">YOUR INFO</h3>
              </div>
            </div>}
            { formContent === 2 ? 
            <div className="md:flex md:justify-start md:items-center md:w-full md:gap-3">
              <li className="nav2 bg-blue-200 font-semibold rounded-full w-10 h-10 xl:w-12 xl:h-12 flex justify-center items-center text-black xl:text-2xl">2</li>
              <div className="hidden md:flex md:flex-col md:leading-none">
                <h3 className="text-sm xl:text-base opacity-70">STEP 2</h3>
                <h3 className="font-semibold text-base xl:text-lg">SELECT PLAN</h3>
              </div>
            </div>
            :
            <div className="md:flex md:justify-start md:items-center md:w-full md:gap-3">
              <li className="nav2 font-semibold rounded-full border-2 w-10 h-10 xl:w-12 xl:h-12 flex justify-center items-center text-white xl:text-2xl">2</li>
              <div className="hidden md:flex md:flex-col md:leading-none">
                <h3 className="text-sm xl:text-base opacity-70">STEP 2</h3>
                <h3 className="font-semibold text-base xl:text-lg">SELECT PLAN</h3>
              </div>
            </div> }
            { formContent === 3 ? 
            <div className="md:flex md:justify-start md:items-center md:w-full md:gap-3">
              <li className="nav3 bg-blue-200 font-semibold rounded-full w-10 h-10 xl:w-12 xl:h-12 flex justify-center items-center text-black xl:text-2xl">3</li>
              <div className="hidden md:flex md:flex-col md:leading-none">
                <h3 className="text-sm xl:text-base opacity-70">STEP 3</h3>
                <h3 className="font-semibold text-base xl:text-lg">ADD-ONS</h3>
              </div>
            </div>
            :
            <div className="md:flex md:justify-start md:items-center md:w-full md:gap-3">
              <li className="nav3 font-semibold rounded-full border-2 w-10 h-10 xl:w-12 xl:h-12 flex justify-center items-center text-white xl:text-2xl">3</li>
              <div className="hidden md:flex md:flex-col md:leading-none">
                <h3 className="text-sm xl:text-base opacity-70">STEP 3</h3>
                <h3 className="font-semibold text-base xl:text-lg">ADD-ONS</h3>
              </div>
            </div> }
            { formContent >= 4 ?
            <div className="md:flex md:justify-start md:items-center md:w-full md:gap-3">
              <li className="nav4 bg-blue-200 font-semibold rounded-full w-10 h-10 xl:w-12 xl:h-12 flex justify-center items-center text-black xl:text-2xl">4</li>
              <div className="hidden md:flex md:flex-col md:leading-none">
                <h3 className="text-sm xl:text-base opacity-70">STEP 4</h3>
                <h3 className="font-semibold text-base xl:text-lg">SUMMARY</h3>
              </div>
            </div>
            : 
            <div className="md:flex md:justify-start md:items-center md:w-full md:gap-3">
              <li className="nav4 font-semibold rounded-full border-2 w-10 h-10 xl:w-12 xl:h-12 flex justify-center items-center text-white xl:text-2xl">4</li>
              <div className="hidden md:flex md:flex-col md:leading-none">
                <h3 className="text-sm xl:text-base opacity-70">STEP 4</h3>
                <h3 className="font-semibold text-base xl:text-lg">SUMMARY</h3>
              </div>
            </div> }
        </ol>
    </nav>
  )
}

export default Nav