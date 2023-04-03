const Checkbox3 = ({isChecked, formData, setFormData}) => {

    const customizableProfileOnOff = () => {
        if (formData.customizableProfile === false) {
            setFormData({...formData, customizableProfile: true})
        } 
        else if (formData.customizableProfile === true) {
            setFormData({...formData, customizableProfile: false})
        }    
    }

  return (
    <> 
        { formData.customizableProfile ?
            <label className="row-start-3 row-end-4 border-2 flex flex-row justify-around items-center px-2 rounded-lg bg-indigo-50 border-indigo-600 cursor-pointer">
                <input 
                type="checkbox" 
                id="customizable-profile-option" 
                className="w-6 h-6 cursor-pointer accent-indigo-600"
                checked={formData.customizableProfile} 
                onChange={customizableProfileOnOff}
                />
                <label htmlFor="customizable-profile-option" className="text-left cursor-pointer px-2">
                    <h3 className="font-bold text-lg">Customizable profile</h3>
                    <p className="font-bold opacity-50">Custom them on your profile</p>
                </label>
                <div>
                    <p className="font-semibold text-indigo-600">
                    {isChecked ? "+$20/yr" : "+$2/mo"}
                    </p>
                </div>
            </label>
        :
            <label className="row-start-3 row-end-4 border-2 flex flex-row justify-around items-center px-2 rounded-lg hover:border-indigo-600 cursor-pointer">
                <input 
                type="checkbox" 
                id="customizable-profile-option" 
                className="w-6 h-6 cursor-pointer accent-indigo-600"
                checked={formData.customizableProfile} 
                onChange={customizableProfileOnOff}
                />
                <label htmlFor="customizable-profile-option" className="text-left cursor-pointer px-2">
                    <h3 className="font-bold text-lg">Customizable profile</h3>
                    <p className="font-bold opacity-50">Custom them on your profile</p>
                </label>
                <div>
                    <p className="font-semibold text-indigo-600">
                    {isChecked ? "+$20/yr" : "+$2/mo"}
                    </p>
                </div>
            </label>
        }
        
    </>
  )
}

export default Checkbox3