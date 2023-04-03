import Image from 'next/image'
import advancedIcon from 'assets/images/icon-advanced.svg'

const Button2 = ({isChecked, advancedPlan, formData}) => {

  return (
    <>
        { formData.plan === "Advanced" ?
            <button type="button" className="row-start-2 row-end-3 border-2 rounded-lg p-4 flex flex-row gap-4 border-indigo-600 bg-indigo-50" onClick={advancedPlan}>
                <Image src={advancedIcon} alt="advanced icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl">Advanced</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$120/yr" : "$12/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold">2 months free</p> : <p className="hidden" />}
                </div>
            </button>
            :
            <button type="button" className="row-start-2 row-end-3 border-2 rounded-lg p-4 flex flex-row gap-4 hover:border-indigo-600" onClick={advancedPlan}>
                <Image src={advancedIcon} alt="advanced icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl">Advanced</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$120/yr" : "$12/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold">2 months free</p> : <p className="hidden" />}
                </div>
            </button>
        }
    </>
    
  )
}

export default Button2