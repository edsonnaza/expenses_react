import React, { useState } from 'react';
import "./Expenses.css";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props){
   const [filteredYear,setFilteredYear]=useState('2020');

     const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
     }

     const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
     });

      return (<div>
                    <Card className="expenses">
                        <ExpensesFilter selected={filteredYear} 
                        onChangeFilter={filterChangeHandler} 
                        />
                      <ExpensesChart expenses={filteredExpenses}/>
                      <ExpensesList item = {filteredExpenses}/>
                    </Card>
                </div>)
}
export default Expenses;