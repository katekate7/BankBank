import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/');
        }
    }, []);

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
        </div>
    );
};

export default Homepage;
