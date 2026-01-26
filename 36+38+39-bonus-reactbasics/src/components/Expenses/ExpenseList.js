import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

export default function ExpenseList({ expenses }) {
    const [selectedDate, setSelectedDate] = useState('2020');

    return (
        <div>
            <ExpensesFilter selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            
            <div className='expenses'>
                {expenses
                    .filter(expense => String(expense.date.getFullYear()) === selectedDate)
                    .map((filteredExpense) => 
                        <ExpenseItem 
                            key={filteredExpense.id} 
                            date={filteredExpense.date} 
                            amount={filteredExpense.amount} 
                            initTitle={filteredExpense.title} 
                        />
                )}
            </div>
        </div>
    );
}