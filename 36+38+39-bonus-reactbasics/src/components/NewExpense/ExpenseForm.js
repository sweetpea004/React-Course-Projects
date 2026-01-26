import { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpenseData }) {

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    function titleChangeHandler(event) {
        setUserInput((prevState) => {
            return {...prevState, title: event.target.value}
        });
    }

    function amountChangeHandler(event) {
        setUserInput((prevState) => {
            return {...prevState, amount: event.target.value}
        });
    }

    function dateChangeHandler(event) {
        setUserInput((prevState) => {
            return {...prevState, date: event.target.value}
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date),
        };

        onSaveExpenseData(expenseData);

        // reset
        setUserInput({
            title: '',
            amount: '',
            date: '',
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={userInput.title}
                        onChange={titleChangeHandler} 
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        value={userInput.amount}
                        onChange={amountChangeHandler} 
                        min="0.01" 
                        step="0.01" 
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        value={userInput.date}
                        onChange={dateChangeHandler} 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        required
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}