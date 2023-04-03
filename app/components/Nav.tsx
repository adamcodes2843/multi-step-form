import Image from 'next/image'
import navPhone from 'assets/images/bg-sidebar-mobile.svg'

const Nav = ({formContent}) => {

  return (
    <nav className="nav-small w-full h-52 top-0 fixed" >
        <Image src={navPhone} alt="" className="w-full h-full object-cover z-0 absolute mix-blend-overlay" />
        <ol className="text-xl flex justify-around items-center m-auto w-52 border-black mt-8 z-10">
            { formContent === 1 ? <li className="nav1 bg-blue-200 font-semibold rounded-full w-10 h-10 flex justify-center items-center text-black">1</li> : 
            <li className="nav1 font-semibold rounded-full border-2 w-10 h-10 flex justify-center items-center text-white">1</li> }
            { formContent === 2 ? <li className="nav2 bg-blue-200 font-semibold rounded-full w-10 h-10 flex justify-center items-center text-black">2</li> :
            <li className="nav2 font-semibold rounded-full border-2 w-10 h-10 flex justify-center items-center text-white">2</li> }
            { formContent === 3 ? <li className="nav3 bg-blue-200 font-semibold rounded-full w-10 h-10 flex justify-center items-center text-black">3</li> :
            <li className="nav3 font-semibold rounded-full border-2 w-10 h-10 flex justify-center items-center text-white">3</li> }
            { formContent === 4 ? <li className="nav4 bg-blue-200 font-semibold rounded-full w-10 h-10 flex justify-center items-center text-black">4</li> : 
            <li className="nav4 font-semibold rounded-full border-2 w-10 h-10 flex justify-center items-center text-white">4</li> }
        </ol>
    </nav>
  )
}

export default Nav