import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getRemaining, getSpent, setBudget } from '../features/expenseSlice'


const Header = () => {
  const state=useSelector((state) => state.expense)
  const dispatch =useDispatch()

  useEffect(()=>{
    dispatch( getSpent())
    dispatch(getRemaining())
  },[state.expenses,state.budget])
 
  return (
    <div  class=" d-flex justify-content-between "><h3 className='me-3'>
     <div class="form-outline">
      <input onChange={(e)=>{  dispatch(setBudget(Number(e.target.value)))}} id='form1' class="form-control form-control" type="text" placeholder={`Budget:${state.budget}$`} />
</div></h3>
      <h3><span class="badge rounded-pill bg-secondary ">Remaining:{state.remaining}$</span></h3>
      <h3><span class="badge rounded-pill bg-success">Spent:{state.spent}$</span></h3>
      </div>
  )
}

export default Header