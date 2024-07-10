import React, { useState, useEffect } from 'react';
import axiosInstance from '../config/axios';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [cooldown, setCooldown] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (cooldown) {
      setCooldownTime(60); // Set initial cooldown time to 60 seconds
      interval = setInterval(() => {
        setCooldownTime((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCooldown(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [cooldown]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axiosInstance.post('/users/forgotPassword', { email });

      if (response.status === 200) {
        setMessage(response.data.message);
        setCooldown(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white">
      <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        {message && <div className="mb-4 text-green-500">{message} Please check your email to verify.</div>}
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${cooldown ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={cooldown}
            >
              {cooldown ? `Try again in ${cooldownTime}s` : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
