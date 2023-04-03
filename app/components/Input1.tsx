const Input1 = ({setFormData, formData, missingData }) => {
  return (
    <>
      { missingData === true  && formData.name === "" ?
        <label>
          <div className="flex flex-row justify-between items-center">
          <span>Name</span><span className="text-red-600">This field is required</span>
          </div>
          <input 
          className="w-full border-2 rounded py-2 px-4 mb-3 border-red-600 focus:outline-none focus:border-indigo-600" 
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
          Name
          <input 
          className="w-full border-2 rounded py-2 px-4 mb-3 hover:border-indigo-600 focus:outline-none focus:border-indigo-600" 
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