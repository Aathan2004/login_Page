import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your actual authentication logic
    // You might use a library like Axios to send a POST request to your backend API
    if (username === '1234' && password === '1234') {
      // Successful login, redirect to booking page
      window.location.href = '/booking';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <img src="https://media.assettype.com/freepressjournal/2023-02/89966cca-b741-40f6-a9f9-dc8f2d501e08/indigo_airlines.jpg" alt="Background" className="background-image" />
      <div className="login-form">
        <h2>Airline Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;