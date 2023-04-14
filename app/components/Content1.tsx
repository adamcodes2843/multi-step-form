import Input1 from './Input1'
import Input2 from './Input2'
import Input3 from './Input3'

type Content1Props = {
  formData: any,
  setFormData: any,
  missingData: boolean
}

const Content1 = ({formData, setFormData, missingData}: Content1Props) => {
  
  return (
    <div className="content1 bg-white mt-24 md:mt-0 fixed md:static md:w-full w-11/12 rounded-xl px-6 xl:py-8 md:pt-4 md:py-0 py-6 md:col-start-2">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold py-3">Personal info</h1>
        <h2 className="text-lg md:text-xl xl:text-2xl opacity-40 font-bold md:leading-8">Please provide your name, email address, and phone number.</h2>
        <fieldset className="mt-4 md:mt-6">
          <Input1 formData={formData} setFormData={setFormData} missingData={missingData} />
          <Input2 formData={formData} setFormData={setFormData} missingData={missingData} />
          <Input3 formData={formData} setFormData={setFormData} missingData={missingData} />
        </fieldset>
      </div>
  )
}

export default Content1