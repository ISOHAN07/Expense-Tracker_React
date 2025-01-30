import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props){
    const saveExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };

        // lifting the state up to the common ancestor for either use by other child or store there
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    };

    return <div className='new-expense'>
        <ExpenseForm onSaveExpense = {saveExpenseHandler}/>
    </div>
}