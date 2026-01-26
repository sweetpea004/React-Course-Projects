import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

export default function AddUser({ onAddUser }) {
    const [enteredUser, setUser] = useState({
        username: '',
        age: '',
    });
    const [error, setError] = useState();

    function changeUsernameHandler(event) {
        setUser(prevState => {
            return {...prevState, username: event.target.value}
        })
    }

    function changeAgeHandler(event) {
        setUser(prevState => {
            return {...prevState, age: event.target.value}
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        if (enteredUser.username.trim().length === 0 || enteredUser.age.trim() === 0 ) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if (+enteredUser.age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater than 0).'
            });
            return;
        }

        onAddUser(enteredUser.username, enteredUser.age);
        
        // reset
        setUser({
            username: '',
            age: '',
        })
    }

    function ErrorHandler() {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} close={ErrorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        value={enteredUser.username} 
                        onChange={changeUsernameHandler} 
                        id="username" 
                        type="text"
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input 
                        value={enteredUser.age} 
                        onChange={changeAgeHandler} 
                        id="age" 
                        type="number"
                    />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>
    );
}