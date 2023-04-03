import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'

const Content2 = ({formData, setFormData, isChecked, setIsChecked}) => {

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
    <div className="content2 bg-white mt-28 fixed w-5/6 rounded-xl px-6 py-8">
        <h1 className="text-3xl font-bold py-3">Select your plan</h1>
        <h2 className="text-xl opacity-40 font-bold leading-8">You have the option of monthly or yearly billing.</h2>
        <fieldset className="grid grid-cols-1 grid-rows-3 gap-4 my-6">
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