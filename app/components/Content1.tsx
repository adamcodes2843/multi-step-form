import Input1 from './Input1'
import Input2 from './Input2'
import Input3 from './Input3'

const Content1 = ({formData, setFormData, missingData}) => {
  
  return (
    <div className="content1 bg-white mt-28 fixed w-5/6 rounded-xl px-6 py-8">
        <h1 className="text-3xl font-bold py-3">Personal info</h1>
        <h2 className="text-xl opacity-40 font-bold leading-8">Please provide your name, email address, and phone number.</h2>
        <fieldset className="mt-6">
          <Input1 formData={formData} setFormData={setFormData} missingData={missingData} />
          <Input2 formData={formData} setFormData={setFormData} missingData={missingData} />
          <Input3 formData={formData} setFormData={setFormData} missingData={missingData} />
        </fieldset>
      </div>
  )
}

export default Content1