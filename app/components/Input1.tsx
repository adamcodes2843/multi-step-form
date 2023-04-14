type Input1Props = {
  setFormData: any,
  formData: any,
  missingData: boolean
}

const Input1 = ({ setFormData, formData, missingData }: Input1Props) => {
  return (
    <>
      { missingData === true  && formData.name === "" ?
        <label>
          <div className="flex flex-row justify-between items-center md:text-base text-sm">
          <span>Name</span><span className="text-red-600 text-sm">This field is required</span>
          </div>
          <input 
          className="xl:mb-6 w-full border-2 rounded md:py-2 px-4 mb-4 border-red-600 focus:outline-none focus:border-indigo-600 lg:rounded-lg hover:cursor-pointer" 
          type="text" 
          placeholder="e.g. Stephen King" 
          value={formData.name}
          onChange={(event) => {
            setFormData({...formData, name: event.target.value})
          }}
          required 
          />
        </label>
        :
        <label>
          <div className="flex flex-row justify-between items-center md:text-base text-sm">
          <span>Name</span>
          </div>
          <input 
          className="xl:mb-6 w-full border-2 rounded py-2 px-4 mb-4 hover:border-indigo-600 focus:outline-none focus:border-indigo-600 lg:rounded-lg hover:cursor-pointer" 
          type="text" 
          placeholder="e.g. Stephen King" 
          value={formData.name}
          onChange={(event) => {
            setFormData({...formData, name: event.target.value})
          }}
          required 
          />
        </label>
      }
    </>
    
  )
}

export default Input1