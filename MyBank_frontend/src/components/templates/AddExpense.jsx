import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const AddExpense = ({ onAddExpense }) => {
  const navigate = useNavigate();
  const [expense, setExpense] = useState({
    name: '',
    category: '',
    date: '',
    amount: ''
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (expense.name && expense.category && expense.date && expense.amount) {
      onAddExpense(expense);
      navigate('/dashboard');
    }
  };

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>
      <Input type="text" name="name" value={expense.name} onChange={handleChange} placeholder="Expense Name" />

      <select name="category" value={expense.category} onChange={handleChange} className="input">
        <option value="">Choose category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <Input type="date" name="date" value={expense.date} onChange={handleChange} />

      <Input type="number" name="amount" value={expense.amount} onChange={handleChange} placeholder="Amount" />

      <div className="buttons">
        <Button text="Save" onClick={handleSave} />
        <Button text="Cancel" onClick={() => navigate('/dashboard')} />
      </div>
    </div>
  );
};

export default AddExpense;
