import React from 'react'
import Header from "./components/Header" 
import ExpensesList from './components/ExpensesList'

import ExpenseForm from './components/ExpenseForm'
import ExpenseSearch from './components/ExpenseSearch'
const App = () => {
   
 
  return (
    <div className='container mt-5 col-11 col-md-7' >
      <h1 className='mb-5 '>React Budget Tracker</h1>
   <Header/>
  <ExpenseSearch />
   <ExpensesList />
   <ExpenseForm />
  </div>
  )
}
export default App