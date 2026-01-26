import { useState } from "react";

import classes from './UserInput.module.css'

const initialInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10,
}

export default function UserInput({ calculateHandler }) {
    const [userInput, setUserInput] = useState(initialInput);

    function submitHandler(event) {
        event.preventDefault();
        calculateHandler(userInput);
    }

    function resetHandler() {
        setUserInput(initialInput);
    }

    function changeHandler(input, value) {
        setUserInput(prevState => {
            return {
                ...prevState, 
                [input]: +value,
            };
        });
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes['input-group']}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input 
                    onChange={(event) => changeHandler('current-savings', event.target.value)} 
                    type="number" 
                    value={userInput['current-savings']}
                    id="current-savings" 
                />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input 
                    onChange={(event) => changeHandler('yearly-contribution', event.target.value)} 
                    type="number" 
                    value={userInput['yearly-contribution']}
                    id="yearly-contribution" 
                />
            </p>
            </div>
            <div className={classes['input-group']}>
            <p>
                <label htmlFor="expected-return">
                Expected Interest (%, per year)
                </label>
                <input 
                    onChange={(event) => changeHandler('expected-return', event.target.value)} 
                    type="number" 
                    value={userInput['expected-return']}
                    id="expected-return" 
                />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input 
                    onChange={(event) => changeHandler('duration', event.target.value)} 
                    type="number" 
                    value={userInput['duration']}
                    id="duration" 
                />
            </p>
            </div>
            <p className={classes.actions}>
            <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                Reset
            </button>
            <button type="submit" className={classes.button}>
                Calculate
            </button>
            </p>
        </form>
    );
}