import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../features/expenseSlice'
 
const ExpenseForm = () => {
  const dispatch=useDispatch()
 const nameRef = useRef(null)
 const costRef = useRef()  

 function submit() {
    if(isNaN(costRef.current.value))
    {
      alert('enter number')
      return ;
    }
    
  dispatch(addExpense({name:nameRef.current.value,cost:costRef.current.value}))

 }
   
  return (<div className='mt-5' >
    <h2 className='d-block'>Add Expense</h2>
    <form className='d-flex mt-3 '>
     
  <div class="mb-3 col-sm-4 ">
    <label for="exampleInputEmail1" class="form-label "> Name</label>
    <input type="text" ref={nameRef} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mx-2 col-sm-4">
    <label for="exampleInputPassword1" class="form-label">Cost</label>
    <input type="text" ref={costRef} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mx-2 col-sm-4 submit "  >
  <button onClick={(e)=>{ e.preventDefault();submit()}} type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
  
  </div>)
}

export default ExpenseForm
