import CardsContainer from './components/CardsContainer'
import ExpenseItem from './components/ExpenseItem'
import Form from './components/Form'
import './index.css'

function App() {

  const expenseDetails = [
    {
      expenseDate : new Date(2024, 10, 13),
      expenseTitle : 'Car Insurance',
      expenseAmout : 300.99
    },
    {
      expenseDate : new Date(),
      expenseTitle : 'Hospital bill',
      expenseAmout : 300.99
    },
    {
      expenseDate : new Date(2024, 11, 13),
      expenseTitle : 'Books',
      expenseAmout : 50.11
    },
    {
      expenseDate : new Date(2024, 11, 13),
      expenseTitle : 'Car Insurance',
      expenseAmout : 300.99
    }
  ]

  return (
    <>

      
      <CardsContainer>
        <Form />

        {/* <ExpenseItem 
        expenseDate={expenseDetails[0].expenseDate} 
        expenseTitle={expenseDetails[0].expenseTitle} 
        expenseAmout={expenseDetails[0].expenseAmout} />

        <ExpenseItem 
        expenseDate={expenseDetails[1].expenseDate} 
        expenseTitle={expenseDetails[1].expenseTitle} 
        expenseAmout={expenseDetails[1].expenseAmout} />

        <ExpenseItem 
        expenseDate={expenseDetails[2].expenseDate} 
        expenseTitle={expenseDetails[2].expenseTitle} 
        expenseAmout={expenseDetails[2].expenseAmout} />

        <ExpenseItem 
        expenseDate={expenseDetails[3].expenseDate} 
        expenseTitle={expenseDetails[3].expenseTitle} 
        expenseAmout={expenseDetails[3].expenseAmout} /> */}
        
      </CardsContainer>

    </>
  )
}

export default App;
