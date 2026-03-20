import React, { useState } from 'react';

function LoginSection({ onLogin, isDark }) {
  const [activeTab, setActiveTab] = useState('login');
  const [loginMessage, setLoginMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username.length < 3) {
      setLoginMessage('Username must be at least 3 characters.');
      return;
    }
    if (password.length < 6) {
      setLoginMessage('Password must be at least 6 characters.');
      return;
    }

    setLoginMessage('Login successful! Redirecting...');
    setShowConfetti(true);
    setTimeout(() => {
      onLogin(username);
    }, 700);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.newUsername.value;
    const email = e.target.newEmail.value;
    const password = e.target.newPassword.value;

    if (username.length < 3) {
      setRegisterMessage('Username must be at least 3 characters.');
      return;
    }
    if (password.length < 6) {
      setRegisterMessage('Password must be at least 6 characters.');
      return;
    }

    setRegisterMessage('Registration successful! Redirecting...');
    setShowConfetti(true);
    setTimeout(() => {
      onLogin(username);
    }, 700);
  };

  return (
    <div className={`login-section ${showConfetti ? 'fade-out' : ''}`}>
      <div className="auth-container">
        <h2>AnimeTV Tracker</h2>
        
        <div className="tab-btns">
          <button
            className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {activeTab === 'login' ? (
          <form onSubmit={handleLogin} className="auth-form">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="main-btn">
              Login
            </button>
            {loginMessage && <div className="message">{loginMessage}</div>}
          </form>
        ) : (
          <form onSubmit={handleRegister} className="auth-form">
            <input
              type="text"
              name="newUsername"
              placeholder="Username"
              required
            />
            <input
              type="email"
              name="newEmail"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Password"
              required
            />
            <button type="submit" className="main-btn">
              Register
            </button>
            {registerMessage && <div className="message">{registerMessage}</div>}
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginSection;
