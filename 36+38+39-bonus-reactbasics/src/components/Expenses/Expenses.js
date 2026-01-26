import './Expenses.css';
import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function ExpenseList({ expenses }) {
    const [selectedDate, setSelectedDate] = useState('2020');

    const filteredExpenses = expenses.filter(expense => String(expense.date.getFullYear()) === selectedDate)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                <ExpensesChart filteredExpenses={filteredExpenses}/>
                <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>     
        </div>
    );
}