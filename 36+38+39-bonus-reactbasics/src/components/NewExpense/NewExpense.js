
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense({ addExpenseHandler }) {

    function saveExpenseData(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        addExpenseHandler(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    );
}