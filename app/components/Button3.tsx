import Image from 'next/image'
import proIcon from 'assets/images/icon-pro.svg'

const Button3 = ({isChecked, proPlan, formData}) => {
  return (
    <>
        { formData.plan === "Pro" ?
            <button type="button" className="row-start-3 row-end-4 border-2 rounded-lg p-4 flex flex-row gap-4 border-indigo-600 bg-indigo-50" onClick={proPlan}>
                <Image src={proIcon} alt="pro icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl">Pro</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$150/yr" : "15/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold">2 months free</p> : <p className="hidden" />}
                </div>
            </button>
            :
            <button type="button" className="row-start-3 row-end-4 border-2 rounded-lg p-4 flex flex-row gap-4 hover:border-indigo-600" onClick={proPlan}>
                <Image src={proIcon} alt="pro icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl">Pro</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$150/yr" : "15/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold">2 months free</p> : <p className="hidden" />}
                </div>
            </button>
        }
    </>
    
  )
}

export default Button3