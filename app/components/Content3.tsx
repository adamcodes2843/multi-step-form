import Checkbox1 from "./Checkbox1"
import Checkbox2 from "./Checkbox2"
import Checkbox3 from "./Checkbox3"

type Content3Props = {
  formData: any,
  setFormData: any,
  isChecked: boolean
}

const Content3 = ({isChecked, formData, setFormData}: Content3Props) => {
    return (
      <div className="Content3 bg-white mt-28 fixed md:mt-0 md:static md:w-full w-5/6 rounded-xl px-6 py-8 md:col-start-2">
          <h1 className="text-3xl font-bold py-3 xl:text-4xl">Pick add-ons</h1>
          <h2 className="text-xl opacity-40 font-bold leading-8 xl:text-2xl">Add-ons help enhance your gaming experience.</h2>
          <fieldset className="grid gid-cols-1 grid-rows-3 gap-4 my-6">
            <Checkbox1 isChecked={isChecked} formData={formData} setFormData={setFormData} />
            <Checkbox2 isChecked={isChecked} formData={formData} setFormData={setFormData} />
            <Checkbox3 isChecked={isChecked} formData={formData} setFormData={setFormData} />
          </fieldset>
          
      </div>
    )
  }
  
  export default Content3