type Input2Props = {
  setFormData: any,
  formData: any,
  missingData: boolean
}

const Input2 = ({setFormData, formData, missingData}: Input2Props) => {

  let validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)

  return (
    <>
      {
        missingData === true && formData.email === "" ?
          <label>
              <div className="flex flex-row justify-between items-center">
              <span>Email Address</span><span className="text-red-600">This field is required</span>
              </div>
                <input 
                  className="xl:mb-6 w-full border-2 rounded py-2 px-4 mb-3 border-red-600 focus:outline-none focus:border-indigo-600 lg:rounded-lg hover:cursor-pointer" 
                  type="email" 
                  placeholder="e.g. stephenking@lorem.com" 
                  value={formData.email}
                  onChange={(event) => {
                    setFormData({...formData, email: event.target.value})
                }}
                required 
                />
          </label>
          : missingData === true && validEmail === false ?
          <label>
              <div className="flex flex-row justify-between items-center">
              <span>Email Address</span><span className="text-red-600">A valid email is required</span>
              </div>
                <input 
                  className="xl:mb-6 w-full border-2 rounded py-2 px-4 mb-3 border-red-600 focus:outline-none focus:border-indigo-600 lg:rounded-lg hover:cursor-pointer" 
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
            <div className="flex flex-row justify-between items-center">
              <span>Email Address</span>
              </div>
                <input 
                className="xl:mb-6 w-full border-2 rounded py-2 px-4 mb-3 hover:border-indigo-600 focus:outline-none focus:border-indigo-600 lg:rounded-lg hover:cursor-pointer" 
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