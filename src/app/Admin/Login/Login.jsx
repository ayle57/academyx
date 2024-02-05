
import { useState } from 'react';
import Dashboard from "../Dashboard/Dashboard.jsx";
import LoginForm from "../Dashboard/LoginForm.jsx";

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (user, pass) => {
        if (user === 'admin' && pass === 'admin') {
            setLoggedIn(true);
            setUsername(user);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            {loggedIn ? (
                <Dashboard username={username} />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}

export default Login;
