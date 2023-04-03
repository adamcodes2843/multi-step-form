import Image from 'next/image'
import arcadeIcon from 'assets/images/icon-arcade.svg'

const Button1 = ({isChecked, arcadePlan, formData}) => {

  return (
    <> 
        { formData.plan === "Arcade" ?
            <button type="button" className="row-start-1 row-end-2 border-2 rounded-lg p-4 flex flex-row gap-4 border-indigo-600 bg-indigo-50" onClick={arcadePlan}>
            <Image src={arcadeIcon} alt="arcade icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl">Arcade</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$90/yr" : "9/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold">2 months free</p> : <p className="hidden" />}
                </div>
            </button>
            :
            <button type="button" className="row-start-1 row-end-2 border-2 rounded-lg p-4 flex flex-row gap-4 hover:border-indigo-600" onClick={arcadePlan}>
            <Image src={arcadeIcon} alt="arcade icon" width="50" height="50" />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl">Arcade</h3>
                    <p className="font-bold opacity-50 text-lg">
                    {isChecked ? "$90/yr" : "9/mo"}
                    </p>
                    {isChecked ? <p className="font-semibold">2 months free</p> : <p className="hidden" />}
                </div>
            </button>
        }
    </>
    
  )
}

export default Button1