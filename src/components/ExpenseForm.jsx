import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";

const Form = (props) => {
  
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [listCount, setListCount] = useState(1)

  const changeTitleHandler = (e) => {
    setTitle(e.target.value)
  }

  const changeAmountHandler = (e) => {
    setAmount(e.target.value)
  }

  const changeDateHandler = (e) => {
    setDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    
    if (title && amount && date) {
  
      setTitle('');
      setAmount('');
      setDate('');

      setListCount(listCount + 1)

      const formData = {
        title: title, 
        amount: amount, 
        date: date,
        countList: listCount,
        id: uuid()
      }

      props.data(formData)

    }
  }
  

  return (
    <>
      <Card color="transparent" className="flex items-center justify-center" shadow={false}>
        <p variant="h4" className="text-black">
          Expense Tracker
        </p>
        <form className="mt-6 mb-2 w-full" onSubmit={submitHandler}>
          <div className="mb-1 flex flex-col lg:flex-row gap-3 lg:items-center">
            <div className="w-[100%]">
              <p variant="h6" className="font-normal text-black">
                Title
              </p>
              <Input
              value={title}
              onChange={changeTitleHandler}
              placeholder="title"
              className=" !border-t-green-200 focus:border focus:border-green-600 focus:!border-t-green-600 rounded py-5"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            </div>
            <div className="w-[100%]">
              <p variant="h6" className="font-normal text-black">
                Amount
              </p>
              <Input
                value={amount}
                onChange={changeAmountHandler}
                type="number"
                placeholder="Amount"
                className=" !border-t-green-200 focus:border focus:border-green-600 focus:!border-t-green-600 rounded py-5"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            
          </div>
          <div className="mb-1 flex flex-col lg:flex-row gap-3 lg:items-center">
            
            <div className="w-[100%]">
              <p variant="h6" className="font-normal text-black">
                Date
              </p>
              <input
                value={date}
                onChange={changeDateHandler}
                type="date"
                className="w-full focus-within:ring-deep-orange-600 rounded p-2 border"
              />
            </div>
            <div className="w-[100%]">
              <Button type="submit" size="md" className="mt-6 py-3.5 border" fullWidth>
                Add Expense
              </Button>
            </div>
          </div>
        </form>

      </Card>

      {/* <Card className="rounded-sm">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{date}</p>
      </Card> */}
    </>
  );
}

export default Form
