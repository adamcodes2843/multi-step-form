import Image from 'next/image'
import proIcon from 'assets/images/icon-pro.svg'

type Button3Props = {
    formData: any,
    proPlan: any,
    isChecked: boolean
  }

const Button3 = ({isChecked, proPlan, formData}: Button3Props) => {
  return (
    <>
        { formData.plan === "Pro" ?
            <button type="button" className="row-start-3 row-end-4 border-2 rounded-lg p-4 flex flex-row md:flex-col md:justify-between gap-4 border-indigo-600 bg-indigo-50 md:w-1/3" onClick={proPlan}>
                <Image src={proIcon} alt="pro icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl md:pt-12">Pro</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$150/yr" : "15/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold text-left lg:text-base">2 months free</p> : <p className="hidden xl:block font-semibold text-left lg:text-base xl:opacity-0">2 months free</p>}
                </div>
            </button>
            :
            <button type="button" className="row-start-3 row-end-4 border-2 rounded-lg p-4 flex flex-row md:flex-col md:justify-between gap-4 hover:border-indigo-600 md:w-1/3" onClick={proPlan}>
                <Image src={proIcon} alt="pro icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl md:pt-12">Pro</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$150/yr" : "$15/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold text-left lg:text-base">2 months free</p> : <p className="hidden xl:block font-semibold text-left lg:text-base xl:opacity-0">2 months free</p>}
                </div>
            </button>
        }
    </>
    
  )
}

export default Button3