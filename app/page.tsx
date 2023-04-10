'use client'

import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Content4 from './components/Content4'
import ThankYou from './components/ThankYou'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400'
})

interface UserData {
  name: string,
  email: string,
  phoneNumber: string | number,
  plan: string,
  bill: string,
  onlineServices: boolean,
  largerStorage: boolean,
  customizableProfile: boolean,
  total: number
}

export default function Home() {
  const [formContent, setFormContent] = useState<number>(1)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [missingData, setMissingData] = useState<boolean>(false)
  const [formData, setFormData] = useState<UserData>({
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

  

  return (
    <main className={`${ubuntu.className} md:rounded-xl md:grid md:grid-cols-3 md:w-11/12 md:p-3 md:gap-3 md:bg-white md:pr-6 xl:p-6`}>
      <Nav formContent={formContent} />
      <form className="flex justify-center md:col-span-2 md:row-span-2 lg:row-span-5 xl:p-20 lg:p-12 lg:pt-0 md:pt-0">
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