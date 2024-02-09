import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, changeBudget] = useState(budget);
    
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onInput={(event) => changeBudget(event.target.value)}></input>
</div>
    );
};
export default Budget;
