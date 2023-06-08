import Image from 'next/image'
import icon from 'assets/images/icon-thank-you.svg'

const ThankYou = () => {
  return (
    <div className="thankYou bg-white mt-24 fixed  md:mt-0 md:static w-11/12 rounded-xl px-8 py-20 md:py-24 flex flex-col justify-center items-center text-center">
        <Image src={icon} alt="Thank you confirmation" />
        <h1 className="text-2xl md:text-3xl font-bold py-3 mt-3 xl:text-4xl">Thank you!</h1>
        <h2 className="text-lg md:text-xl opacity-40 leading-8 md:flex md:justify-center md:w-96 xl:text-lg">Thanks for confirming your subscription! We hope you had fun using our platform. If you ever need support, please feel free to email us at support@formgaming.com.</h2>  
    </div>
  )
}

export default ThankYou