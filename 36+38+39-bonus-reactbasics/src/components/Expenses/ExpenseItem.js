import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem({ date, initTitle, amount }) {
    const [title, setTitle] = useState(initTitle);

    function handleChangeTitle() {
        setTitle("Updated!");
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
            <button onClick={handleChangeTitle} >Change Title</button>
        </Card>
    );
}