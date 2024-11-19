import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="p-10 bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-700 max-w-md w-full">
        <h2 className="text-4xl font-bold text-gray-200 text-center mb-8">Login</h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center space-y-6"
        >
          <label className="w-full text-gray-400 text-lg" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full text-lg bg-black text-gray-300 placeholder-gray-500 py-3 px-5 rounded-lg border border-gray-700 outline-none transition focus:ring-2 focus:ring-teal-500"
            type="email"
            placeholder="example@ems.com"
          />

          <label className="w-full text-gray-400 text-lg" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full text-lg bg-black text-gray-300 placeholder-gray-500 py-3 px-5 rounded-lg border border-gray-700 outline-none transition focus:ring-2 focus:ring-teal-500"
            type="password"
            placeholder="Enter your password"
          />

          <button className="w-full bg-teal-600 text-lg text-white py-3 rounded-lg shadow-md hover:bg-teal-700 transition-all">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
