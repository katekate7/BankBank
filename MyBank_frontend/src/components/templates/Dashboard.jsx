import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';

const Dashboard = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="dashboard">
          <div className="top-part">
      <h2>Dashboard</h2>
      
      <div className="add-expense-section">
        <Button className="add-expense-btn" text="➕ Add Expense" onClick={() => navigate('/add-expense')} />
      </div>
      </div>

      <div className="expense-list">
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <div key={index} className="expense-item">
              <p><strong>{expense.name}</strong> | {expense.category}</p>
              <p>Date: {expense.date}</p>
              <p>Amount: ${expense.amount}</p>
            </div>
          ))
        ) : (
          <p>No expenses yet</p>
        )}
      </div>

      <div className="logout-section">
        <Button className="logout-btn" text="Log out" onClick={() => localStorage.removeItem('user')} />
      </div>
    </div>
  );
};

export default Dashboard;
