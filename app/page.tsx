'use client'

import {useState, useEffect} from 'react'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Content4 from './components/Content4'
import ThankYou from './components/ThankYou'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [formContent, setFormContent] = useState(1)
  const [isChecked, setIsChecked] = useState(false)
  const [missingData, setMissingData] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    plan: "Arcade",
    bill: "Monthly",
    onlineServices: false,
    largerStorage: false,
    customizableProfile: false,
    total: 9
  })

  useEffect(() => {
    if (isChecked) {
      setFormData({...formData, bill: "Yearly"})
    } 
    else if (isChecked === false) {
      setFormData({...formData, bill: "Monthly"})
    }
  }, [isChecked])

  console.log(formData)
  console.log(missingData)

  return (
    <main>
      <Nav formContent={formContent} />
      <form className="flex justify-center">
        {
          formContent === 1 ? <Content1 formData={formData} setFormData={setFormData} missingData={missingData} /> :
          formContent === 2 ? <Content2 formData={formData} setFormData={setFormData} 
            isChecked={isChecked} setIsChecked={setIsChecked} /> :
          formContent === 3 ? <Content3 formData={formData} setFormData={setFormData} 
            isChecked={isChecked} /> :
          formContent === 4 ? <Content4 formData={formData} setFormContent={setFormContent} isChecked={isChecked} /> : <ThankYou />
        }
    
      </form>
      {
        formContent !== 5 ? <Footer setFormContent={setFormContent} formContent={formContent} formData={formData} setFormData={setFormData} isChecked={isChecked} setMissingData={setMissingData} /> : ""
      }
    </main> 
  )
}