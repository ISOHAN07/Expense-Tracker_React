import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props){
    // Approach having three different state change
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmt, setAmt] = useState('');
    const [enteredDate, setDate] = useState('');

    // Can also be done using only one state change hook
    // the change function and the state will comprise of object containing all the change parameters
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmt: '',
    //     enteredDate: ''
    // });

    // const changeHandler = (event) => {
    //     setUserInput({
    //         enteredTitle: ''
    //     });
    // };

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amtChangeHandler = (event) =>{
        setAmt(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    // for updating the state based on the previous state:
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         other key that needs to be overwritten
    //     }
    // });

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amt: enteredAmt,
            date: new Date(enteredDate)
        };

        props.onSaveExpense(expenseData);
        setAmt('');
        setDate('');
        setTitle('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value = {enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmt} onChange={amtChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2023-07-21" max="2027-07-20" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}