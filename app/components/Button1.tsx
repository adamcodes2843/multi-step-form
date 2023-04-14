import Image from 'next/image'
import arcadeIcon from 'assets/images/icon-arcade.svg'

type Button1Props = {
    formData: any,
    arcadePlan: any,
    isChecked: boolean
  }

const Button1 = ({isChecked, arcadePlan, formData}: Button1Props) => {

  return (
    <> 
        { formData.plan === "Arcade" ?
            <button type="button" className="row-start-1 row-end-2 border-2 rounded-lg p-4 flex flex-row md:flex-col md:justify-between gap-4 border-indigo-600 bg-indigo-50 md:w-1/3" onClick={arcadePlan}>
            <Image src={arcadeIcon} alt="arcade icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-lg md:text-xl md:pt-12">Arcade</h3>
                    <p className="font-bold opacity-50 md:text-lg">
                    {isChecked ? "$90/yr" : "$9/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold text-left md:text-base text-sm">2 months free</p> : <p className="font-semibold text-left md:text-base text-sm hidden xl:block xl:opacity-0">2 months free</p>}
                </div>
            </button>
            :
            <button type="button" className="row-start-1 row-end-2 border-2 rounded-lg p-4 flex flex-row md:flex-col md:justify-between gap-4 hover:border-indigo-600 md:w-1/3" onClick={arcadePlan}>
            <Image src={arcadeIcon} alt="arcade icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-lg md:text-xl md:pt-12">Arcade</h3>
                    <p className="font-bold opacity-50 md:text-lg">
                    {isChecked ? "$90/yr" : "$9/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold text-left md:text-base md:font-normal text-sm">2 months free</p> : <p className="font-semibold text-left md:text-base text-sm hidden xl:block xl:opacity-0">2 months free</p>}
                </div>
            </button>
        }
    </>
    
  )
}

export default Button1