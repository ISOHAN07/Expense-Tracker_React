import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

export default function ExpenseItem(props){
    const [value, setValue] = useState(props.title);

    // let title = props.title;

    function clickHandler(){
        setValue("Updated");
        console.log(title);
    }

    return(
        <Card className='expense-item'>
            <ExpenseDate dates={props.date}/>
            <div className='expense-item__description'>
                <h2>{value}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
