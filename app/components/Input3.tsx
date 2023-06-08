type Input3Props = {
  setFormData: any,
  formData: any,
  missingData: boolean
}

const Input3 = ({setFormData, formData, missingData}: Input3Props) => {

  let validPhoneNumber = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gm.test(formData.phoneNumber)

  return (
    <>
      {
        missingData === true && formData.phoneNumber === "" ?
        <label>
                <div className="flex flex-row justify-between items-center md:text-base text-sm">
                <span>Phone Number</span><span className="text-red-600 md:text-base text-sm">This field is required</span>
                </div>
                <input 
                className="w-full border-2 rounded py-2 px-4 mb-3 border-red-600 focus:outline-none focus:border-indigo-600 lg:rounded-lg hover:cursor-pointer" 
                type="text" 
                placeholder="e.g. 1 555 555 5555" 
                value={formData.phoneNumber}
                onChange={(event) => {
                    setFormData({...formData, phoneNumber: event.target.value})
                }}
                required 
                />
            </label>
            : missingData === true && validPhoneNumber === false ?
            <label>
                <div className="flex flex-row justify-between items-center md:text-base text-sm">
                <span>Phone Number</span><span className="text-red-600 md:text-base text-sm">A valid number is required</span>
                </div>
                <input 
                className="w-full border-2 rounded py-2 px-4 mb-3 border-red-600 focus:outline-none focus:border-indigo-600 lg:rounded-lg hover:cursor-pointer" 
                type="text" 
                placeholder="e.g. 1 555 555 5555" 
                value={formData.phoneNumber}
                onChange={(event) => {
                    setFormData({...formData, phoneNumber: event.target.value})
                }}
                required 
                />
            </label>
            :
            <label>
                <div className="flex flex-row justify-between items-center md:text-base text-sm">
                <span>Phone Number</span>
                </div>
                <input 
                className="w-full border-2 rounded py-2 px-4 mb-3 hover:border-indigo-600 focus:outline-none focus:border-indigo-600 lg:rounded-lg hover:cursor-pointer" 
                type="text" 
                placeholder="e.g. 1 555 555 5555" 
                value={formData.phoneNumber}
                onChange={(event) => {
                    setFormData({...formData, phoneNumber: event.target.value})
                }}
                required 
                />
            </label>
      }
            
    </>
  )
}

export default Input3