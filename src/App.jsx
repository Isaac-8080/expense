import { useState } from 'react'
import CardsContainer from './components/CardsContainer'
import ExpenseItem from './components/ExpenseItem'
import NewExpense from './components/NewExpense'
import Form from './Form'
import './index.css'
import UserList from './UserList'

function App() {

  // const [collectFormData, setcollectFormData] = useState([])

  // const handleFormData = (formData) => {
  //   setcollectFormData([...collectFormData, formData])
  // }  


  return (

    <>
    
      {/* <div className='h-screen flex items-cente gap-10 justify-center pt-20'>
        <Form formData={handleFormData} />
        <UserList list={collectFormData} />
      </div> */}

      <CardsContainer>
        <NewExpense />
      </CardsContainer>

    </>
  )
}

export default App;
