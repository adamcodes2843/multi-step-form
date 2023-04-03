const Input3 = ({setFormData, formData, missingData}) => {
  return (
    <>
      {
        missingData === true && formData.phoneNumber === "" ?
        <label>
                <div className="flex flex-row justify-between items-center">
                <span>Email Address</span><span className="text-red-600">This field is required</span>
                </div>
                <input 
                className="w-full border-2 rounded py-2 px-4 mb-3 border-red-600 focus:outline-none focus:border-indigo-600" 
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
                Phone Number
                <input 
                className="w-full border-2 rounded py-2 px-4 mb-3 hover:border-indigo-600 focus:outline-none focus:border-indigo-600" 
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