
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

export default function ExpensesList({filteredExpenses}) {   

    return (
        <div className='expenses-list'>
            {filteredExpenses.length === 0 ? (
                <h2 className='expenses-list__fallback'>No Expenses Found.</h2>
            ):(
                filteredExpenses.map((filteredExpense) => 
                    <ExpenseItem 
                        key={filteredExpense.id} 
                        date={filteredExpense.date} 
                        amount={filteredExpense.amount} 
                        initTitle={filteredExpense.title} 
                    />
                )
            )}
        </div>
    );
}