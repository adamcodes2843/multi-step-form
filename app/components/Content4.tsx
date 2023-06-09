type Content4Props = {
  formData: any,
  setFormContent: any,
  isChecked: boolean
}

const Content4 = ({formData, setFormContent, isChecked}: Content4Props) => {

  const goBack = () => {
    setFormContent(2)
  }

  const planCost = () => {
    if (isChecked) {
      if (formData.plan === "Arcade") {
        return "$90/yr"
      } else if (formData.plan === "Advanced") {
        return "$120/yr"
      } else {
        return "$150/yr"
      }
    } 
    if (isChecked === false) {
      if (formData.plan === "Arcade") {
        return "$9/mo"
      } else if (formData.plan === "Advanced") {
        return "$12/mo"
      } else {
        return "$15/mo"
      }

    }
  }

  return (
    <div className="content4 bg-white mt-24 fixed md:mt-0 md:static md:w-full w-11/12  rounded-xl px-6 xl:py-8 lg:py-4 md:pt-4 md:py-0 py-6 md:col-start-2">
        <h1 className="text-2xl md:text-3xl font-bold py-3 xl:text-4xl">Finishing up</h1>
        <h2 className="text-lg md:text-xl opacity-40 font-bold leading-8 xl:text-2xl">Double-check everything looks OK before confirming.</h2>
        <div className="bg-gray-100 rounded-xl flex flex-col p-6 my-4 font-semibold">
          <div className="flex flex-row items-center justify-between pb-4">
            <div>
              <h3 className="font-bold">{formData.plan} &#40;{formData.bill}&#41;</h3>
              <button className="opacity-50 w-2 h-4 hover:opacity-100 hover:text-indigo-600" onClick={goBack}><u>Change</u></button>
            </div>
            <h3 className="font-bold">{planCost()}</h3>
          </div>
          <ul className="border-t-2 font-semibold">
            {formData.onlineServices ? 
            <li className="flex flex-row items-center justify-between pt-3">
            <h3 className="opacity-50">Online service</h3>
            <h3 className="font-semibold">{isChecked ? "+$10/yr": "+$1/mo"}</h3>
            </li>
            : <li className="hidden"></li>}
            {formData.largerStorage ? 
            <li className="flex flex-row items-center justify-between pt-3">
            <h3 className="opacity-50">Larger storage</h3>
            <h3 className="font-semibold">{isChecked ? "+$20/yr": "+$2/mo"}</h3>
            </li>
            : <li className="hidden"></li>}
            {formData.customizableProfile ? 
            <li className="flex flex-row items-center justify-between pt-3">
            <h3 className="opacity-50">Customizable profile</h3>
            <h3 className="font-semibold">{isChecked ? "+$20/yr": "+$2/mo"}</h3>
            </li>
            : <li className="hidden"></li>}
          </ul>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-l opacity-50 font-semibold mx-4">Total &#40;per {formData.bill === "Monthly" ? "month" : "year"}&#41;</h2>
          <h2 className="font-bold text-indigo-600 text-lg mr-4">
            ${formData.total}/{isChecked ? "yr" : "mo"}
          </h2>
        </div>     
    </div>
  )
}

export default Content4