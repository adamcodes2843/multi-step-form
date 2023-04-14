type FooterProps = {
  formData: any,
  setFormData: any,
  setFormContent: any,
  setMissingData: any,
  formContent: number,
  isChecked: boolean
}

const Footer = ({setFormContent, formContent, formData, setFormData, isChecked, setMissingData}: FooterProps) => {

  let validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
  let validPhoneNumber = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm.test(formData.phoneNumber)

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
    if (formData.name === "" || formData.email === "" || formData.phoneNumber === "" || validEmail === false || validPhoneNumber === false) {
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
    <footer className="bg-white fixed md:static md:h-20 h-16 w-full md:w-fill  md:col-span-2 md:row-span-1 bottom-0 flex justify-between items-center p-6 xl:px-20 lg:px-16">
        <button className="font-bold opacity-50 xl:text-xl hover:opacity-70 xl:ml-2 lg:ml-6 md:ml-4" disabled={formContent === 1} onClick={previousPage}>
            {formContent !== 1 ? "Go Back" : ""}
        </button>
        <button className="md:font-semibold bg-blue-900 hover:bg-blue-700 text-white py-2 px-3 md:p-3 rounded md:rounded-xl xl:text-xl xl:px-6 xl:py-3" onClick={nextPage} type={formContent !== 4 ? "button" : "submit"}>
            {formContent === 4 ? "Confirm" : "Next Step"}
        </button>
    </footer>
  )
}

export default Footer