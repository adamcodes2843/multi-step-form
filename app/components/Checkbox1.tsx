type Checkbox1Props = {
    formData: any,
    setFormData: any,
    isChecked: boolean
  }

const Checkbox1 = ({isChecked, formData, setFormData}: Checkbox1Props) => {

    const onlineServiceOnOff = () => {
        if (formData.onlineServices === false) {
            setFormData({...formData, onlineServices: true})
        } 
        else if (formData.onlineServices === true) {
            setFormData({...formData, onlineServices: false})
        }    
    }

  return (
    <>
        {
            formData.onlineServices ?
            <label className="row-start-1 row-end-2 border-2 flex flex-row justify-around items-center py-2 px-4 md:px-2 rounded-lg bg-indigo-50 border-indigo-600 cursor-pointer">
                <input 
                    type="checkbox" 
                    id="online-service-option" 
                    className="w-6 h-6 cursor-pointer accent-indigo-600"
                    checked={formData.onlineServices} 
                    onChange={onlineServiceOnOff}
                />
                <label htmlFor="online-service-option" className="text-left cursor-pointer px-4">
                    <h3 className="font-bold md:text-lg xl:text-2xl">Online service</h3>
                    <p className="font-bold opacity-50 text-sm md:text-base">Access to muliplayer games</p>
                </label>
                <div>
                    <p className="font-semibold text-indigo-600">
                    {isChecked ? "+$10/yr" : "+$1/mo"}
                    </p>
                </div>
            </label>
            :
            <label className="row-start-1 row-end-2 border-2 flex flex-row justify-around items-center py-2 px-4 md:px-2 rounded-lg hover:border-indigo-600 cursor-pointer">
                <input 
                    type="checkbox" 
                    id="online-service-option" 
                    className="w-6 h-6 cursor-pointer accent-indigo-600"
                    checked={formData.onlineServices} 
                    onChange={onlineServiceOnOff}
                />
                <label htmlFor="online-service-option" className="text-left cursor-pointer px-4">
                    <h3 className="font-bold md:text-lg xl:text-2xl">Online service</h3>
                    <p className="font-bold opacity-50 text-sm md:text-base">Access to muliplayer games</p>
                </label>
                <div>
                    <p className="font-semibold text-indigo-600">
                    {isChecked ? "+$10/yr" : "+$1/mo"}
                    </p>
                </div>
            </label>
        }
    </>
    
  )
}

export default Checkbox1