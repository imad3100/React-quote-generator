import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../features/expenseSlice'



const ExpenseSearch = () => {
    
const dispatch=useDispatch()
  return (
    <div class="form-outline mt-3">
  <input onChange={(e)=>dispatch(search(e.target.value))} type="search" id="form2" class="form-control" placeholder="Search" aria-label="Search" />
</div>
  )
}

export default ExpenseSearch