import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    expenses: [{name:'Shopping' , cost:30},],
    budget:300 ,
    spent:65 ,
   remaining:0,
   searchKey:null
  }

  export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
       setBudget(state,action){
        if(action.payload<1)
        state.budget=300
        else
        state.budget=action.payload ;
       }
      ,
        addExpense:(state,action)=>{
        
        state.expenses.push(action.payload) ;
       
      
        },
        removeExpense:(state,action)=>{
      state.expenses.splice(action.payload,1) ;        
 
        },
        getSpent:(state)=>{
          console.log("call");
        state.spent=state.expenses.reduce((acc, b) => acc +Number(b.cost), 0)
        },
        getRemaining:(state)=>{
         state.remaining=state.budget-state.spent ;
        },
        search:(state,action)=>{
            state.searchKey=action.payload ;
        }
    }

})
export const {setBudget,addExpense,removeExpense,getSpent,getRemaining,search} =expenseSlice.actions ;
export default expenseSlice.reducer