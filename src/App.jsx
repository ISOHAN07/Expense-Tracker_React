import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2025, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2026, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    // console.log('new_expense', expense);
    setExpenses((prevExpenses) => {
      // console.log('previous:',prevExpenses);
      const NewExpense = [expense, ...prevExpenses];
      // console.log(NewExpense);
      return NewExpense;
    });
    // console.log(dummyExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} /> 
      <Expenses items={expenses} />
    </div>
  );
}

export default App;