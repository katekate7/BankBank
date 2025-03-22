import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './stores/Store';
import ModuleList from './routes/modules/ModuleList';
import Homepage from './components/templates/Homepage';
import LoginTemplate from './components/templates/LoginTemplate';
import Dashboard from './components/templates/Dashboard';
import AddExpense from './components/templates/AddExpense';
import RegisterTemplate from './components/templates/RegisterTemplate'; // NEW!

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginTemplate />} />
          <Route path="/register" element={<RegisterTemplate />} /> {/* NEW ROUTE */}
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard expenses={expenses} />} />
          <Route path="/add-expense" element={<AddExpense onAddExpense={addExpense} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
