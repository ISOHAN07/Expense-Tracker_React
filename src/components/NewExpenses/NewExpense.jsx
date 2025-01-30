import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

export default function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };

        // lifting the state up to the common ancestor for either use by other child or store there
        props.onAddExpense(expenseData);
        // console.log(expenseData);
        setIsEditing(false);
    };

    const startHandler = () => {
        setIsEditing(true);
    };

    const stopHandler = () => {
        setIsEditing(false);
    };

    return(
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm onSaveExpense = {saveExpenseHandler} onCancel = {stopHandler}/>
            )}
        </div>
    );
};