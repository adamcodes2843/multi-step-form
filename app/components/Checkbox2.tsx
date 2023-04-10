type Checkbox2Props = {
  formData: any,
  setFormData: any,
  isChecked: boolean
}

const Checkbox2 = ({isChecked, formData, setFormData}: Checkbox2Props) => {

    const largerStorageOnOff = () => {
        if (formData.largerStorage === false) {
            setFormData({...formData, largerStorage: true})
        } 
        else if (formData.largerStorage === true) {
            setFormData({...formData, largerStorage: false})
        }    
    }

  return (
    <>
        { formData.largerStorage ? 
        <label className="row-start-2 row-end-3 border-2 flex flex-row items-center justify-around px-2 rounded-lg bg-indigo-50 border-indigo-600 cursor-pointer">
            <input 
            type="checkbox" 
            id="larger-storage-option" 
            className="w-6 h-6 cursor-pointer accent-indigo-600" 
            checked={formData.largerStorage}
            onChange={largerStorageOnOff}
            />
            <label htmlFor="larger-storage-option" className="text-left mr-8 cursor-pointer px-2">
                <h3 className="font-bold text-lg xl:text-2xl">Larger storage</h3>
                <p className="font-bold opacity-50">Extra 1TB of cloud save</p>
            </label>
              <div>
                <p className="font-semibold text-indigo-600">
                  {isChecked ? "+$20/yr" : "+$2/mo"}
                </p>
              </div>
        </label>
        : 
        <label className="row-start-2 row-end-3 border-2 flex flex-row items-center justify-around px-2 rounded-lg hover:border-indigo-600 cursor-pointer">
            <input 
            type="checkbox" 
            id="larger-storage-option" 
            className="w-6 h-6 cursor-pointer accent-indigo-600" 
            checked={formData.largerStorage}
            onChange={largerStorageOnOff}
            />
            <label htmlFor="larger-storage-option" className="text-left mr-8 cursor-pointer px-2">
                <h3 className="font-bold text-lg xl:text-2xl">Larger storage</h3>
                <p className="font-bold opacity-50">Extra 1TB of cloud save</p>
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

export default Checkbox2