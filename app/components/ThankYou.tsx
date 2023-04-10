import Image from 'next/image'
import icon from 'assets/images/icon-thank-you.svg'

const ThankYou = () => {
  return (
    <div className="thankYou bg-white mt-28 fixed  md:mt-0 md:static w-5/6 rounded-xl px-8 py-24 flex flex-col justify-center items-center text-center">
        <Image src={icon} alt="Thank you confirmation" />
        <h1 className="text-3xl font-bold py-3 mt-3 xl:text-4xl">Thank you!</h1>
        <h2 className="text-xl opacity-40 leading-8 md:flex md:justify-center md:w-96 xl:text-lg">Thanks for confirming you subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@lormgaming.com.</h2>
          
    </div>
  )
}

export default ThankYou