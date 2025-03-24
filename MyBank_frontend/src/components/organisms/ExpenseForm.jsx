import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const ExpenseForm = ({ onSubmit }) => {
  const [expense, setExpense] = useState({
    name: '',
    category: '',
    date: '',
    amount: ''
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(expense);
    setExpense({ name: '', category: '', date: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <Input type="text" name="name" placeholder="Expense Name" value={expense.name} onChange={handleChange} />
      <Input type="text" name="category" placeholder="Category" value={expense.category} onChange={handleChange} />
      <Input type="date" name="date" value={expense.date} onChange={handleChange} />
      <Input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} />
      <Button text="Add Expense" onClick={() => {}} />
    </form>
  );
};

export default ExpenseForm;
