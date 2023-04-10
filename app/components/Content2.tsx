import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'

type Content2Props = {
  formData: any,
  setFormData: any,
  isChecked: boolean,
  setIsChecked: any
}

const Content2 = ({formData, setFormData, isChecked, setIsChecked}: Content2Props) => {

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  const arcadePlan = () => {
    setFormData({...formData, plan: "Arcade"})
  }
  const advancedPlan = () => {
    setFormData({...formData, plan: "Advanced"})
  }
  const proPlan = () => {
    setFormData({...formData, plan: "Pro"})
  }

  return (
    <div className="content2 bg-white mt-28 md:mt-0 fixed md:static w-5/6 rounded-xl px-6 py-8 md:col-start-2 md:w-full md:flex md:flex-col">
        <h1 className="text-3xl font-bold py-3 xl:text-4xl">Select your plan</h1>
        <h2 className="text-xl opacity-40 font-bold leading-8 xl:text-2xl">You have the option of monthly or yearly billing.</h2>
        <fieldset className="grid grid-cols-1 grid-rows-3 md:flex md:items-stretch md:justify-between gap-4 my-6">
          <Button1 isChecked={isChecked} arcadePlan={arcadePlan} formData={formData} />
          <Button2 isChecked={isChecked} advancedPlan={advancedPlan} formData={formData} />
          <Button3 isChecked={isChecked} proPlan={proPlan} formData={formData} />
        </fieldset>
        <label className="flex justify-center items-center cursor-pointer gap-6 bg-slate-100 p-4 rounded-lg">
          {isChecked ? <span className="font-bold text-lg opacity-50">Monthly</span> : <span className="font-bold text-lg">Monthly</span>}
          <input type="checkbox" className="sr-only peer" checked={isChecked} onChange={checkHandler} />
            <div className="relative w-14 h-8 bg-blue-900 peer-focus:outline-none rounded-full peer peer-focus:ring-2 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-900"></div>
            {isChecked ? <span className="text-lg font-bold">Yearly</span> : <span className="text-lg font-bold opacity-50">Yearly</span>}
        </label>
    </div>
  )
}

export default Content2