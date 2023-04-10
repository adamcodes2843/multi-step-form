import Image from 'next/image'
import advancedIcon from 'assets/images/icon-advanced.svg'

type Button2Props = {
    formData: any,
    advancedPlan: any,
    isChecked: boolean
  }

const Button2 = ({isChecked, advancedPlan, formData}: Button2Props) => {

  return (
    <>
        { formData.plan === "Advanced" ?
            <button type="button" className="row-start-2 row-end-3 border-2 rounded-lg p-4 flex flex-row md:flex-col md:justify-between gap-4 border-indigo-600 bg-indigo-50 md:w-1/3" onClick={advancedPlan}>
                <Image src={advancedIcon} alt="advanced icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl md:pt-12">Advanced</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$120/yr" : "$12/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold text-left lg:text-base">2 months free</p> : <p className="hidden xl:block font-semibold text-left lg:text-base xl:opacity-0">2 months free</p>}
                </div>
            </button>
            :
            <button type="button" className="row-start-2 row-end-3 border-2 rounded-lg p-4 flex flex-row md:flex-col md:justify-between gap-4 md:w-1/3 hover:border-indigo-600" onClick={advancedPlan}>
                <Image src={advancedIcon} alt="advanced icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl md:pt-12">Advanced</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$120/yr" : "$12/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold text-left lg:text-base">2 months free</p> : <p className="hidden xl:block font-semibold text-left lg:text-base xl:opacity-0">2 months free</p>}
                </div>
            </button>
        }
    </>
    
  )
}

export default Button2