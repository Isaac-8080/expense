import React from 'react'
// import { useState } from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
  
  return (
    <>

      {
        props.formItem.map((item, index) => {
          return (
            <>
              <div key={index} className='flex flex-col justify-between bg-white p-4 shadow my-2 rounded'>
              
                <div className='flex flex-col'>
                  {/* <p className='bg-'>{item.countList}.</p> */}
                  <ExpenseDate expenseDate={item.date} />
                  <h2 className='font-light capitalize'>Title : {item.title}</h2>
                  <span className=' text-[#2E2E2E]'>Amount : ${item.amount}</span>
                </div>

                <button className='bg-red-600 w-fit text-white rounded py-1 px-2'>delete</button>
                
              </div>
            </>  
          )
        })
      }
    </>
  )
}

export default ExpenseItem
