const Footer = ({setFormContent, formContent, formData, setFormData, isChecked, setMissingData}) => {

  let finalCost = 0

  const totalCalc = () => {
    if (formData.plan === "Arcade") {
      finalCost = 9
    }
    if (formData.plan === "Advanced") {
      finalCost = 12
    }
    if (formData.plan === "Pro") {
      finalCost = 15
    } 
    if (formData.onlineServices) {
      finalCost += 1
    }
    if (formData.largerStorage) {
      finalCost += 2
    }
    if (formData.customizableProfile) {
      finalCost += 2
    }
    if (isChecked) {
      finalCost = finalCost * 10
    }
    setFormData({...formData, total: finalCost})
  }

  const requiredAlert = () => {
    if (formData.name === "" || formData.email === "" || formData.phoneNumber === "") {
      setMissingData(true)
      setFormContent(1)
    } else {
      setFormContent(formContent + 1)
      setMissingData(false)
    }
  }

  const nextPage = () => {
    if (formContent == 1) {
    requiredAlert()  
    }
    if (formContent == 3) {
    totalCalc()
    }
    if (formContent > 1 && formContent < 5)
    setFormContent(formContent + 1)
  }

  const previousPage = () => {
    if (formContent > 1 && formContent < 5)
    setFormContent(formContent - 1)
  }

 

  return (
    <footer className="bg-white fixed h-20 w-full bottom-0 flex justify-between items-center p-6">
        <button className="font-bold opacity-50" disabled={formContent === 1} onClick={previousPage}>
            {formContent !== 1 ? "Go Back" : ""}
        </button>
        <button className="font-semibold bg-blue-900 hover:bg-blue-700 text-white p-3 rounded" onClick={nextPage} type={formContent !== 4 ? "button" : "submit"}>
            {formContent === 4 ? "Confirm" : "Next Step"}
        </button>
    </footer>
  )
}

export default Footer