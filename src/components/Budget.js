import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>

if (budget = (20000)) {  
    alert ("The value cannot exceed 20000")}
</div>
    );    
};
export default Budget;