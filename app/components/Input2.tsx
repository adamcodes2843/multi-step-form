const Input2 = ({setFormData, formData, missingData}) => {
  return (
    <>
      {
        missingData === true && formData.email === "" ?
          <label>
              <div className="flex flex-row justify-between items-center">
              <span>Email Address</span><span className="text-red-600">This field is required</span>
              </div>
                <input 
                  className="w-full border-2 rounded py-2 px-4 mb-3 border-red-600 focus:outline-none focus:border-indigo-600" 
                  type="email" 
                  placeholder="e.g. stephenking@lorem.com" 
                  value={formData.email}
                  onChange={(event) => {
                    setFormData({...formData, email: event.target.value})
                }}
                required 
                />
          </label>
          :
          <label>
                Email Address
                <input 
                className="w-full border-2 rounded py-2 px-4 mb-3 hover:border-indigo-600 focus:outline-none focus:border-indigo-600" 
                type="email" 
                placeholder="e.g. stephenking@lorem.com" 
                value={formData.email}
                onChange={(event) => {
                    setFormData({...formData, email: event.target.value})
                }}
                required 
                />
          </label>
      }
    </>
  )
}

export default Input2