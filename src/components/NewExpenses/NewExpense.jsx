import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props){
    const saveExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    return <div className='new-expense'>
        <ExpenseForm onSaveExpense = {saveExpenseHandler}/>
    </div>
}