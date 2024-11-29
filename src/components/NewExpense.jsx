import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseItem from './ExpenseItem'

const NewExpense = () => {

  const [form, setForm] = useState([])

  const handleFormData = (formInfo) => {
    setForm([...form, formInfo])
  }

  // const handleDelete = () => {
  //   setForm(form.filter((item) => item.id !== id))
  // }
  
  return (
    <>
      <ExpenseForm data={handleFormData} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

      <ExpenseItem formItem={form} />
      </div>
    </>
  )
}

export default NewExpense