import PropTypes from 'prop-types';
import Button from '../atoms/Button';

const ExpenseList = ({ expenses, onUpdate, onDelete }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <div key={index} className="expense-item">
          <p><strong>{expense.name}</strong> | {expense.category}</p>
          <p>Date: {expense.date}</p>
          <p>Amount: ${expense.amount}</p>
          <Button text="✏️" onClick={() => onUpdate(index, { ...expense, name: 'Updated' })} />
          <Button text="❌" onClick={() => onDelete(index)} />
        </div>
      ))}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExpenseList;
