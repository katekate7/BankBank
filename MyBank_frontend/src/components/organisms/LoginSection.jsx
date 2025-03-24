import { useNavigate } from 'react-router-dom';
import LoginForm from '../molecules/LoginForm';

const LoginSection = () => {
  const navigate = useNavigate(); // ✅ Тут правильно!

  return (
    <div className="login-section">
      <h2>Welcome, please log in</h2>
      <LoginForm />
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  );
};

export default LoginSection;
