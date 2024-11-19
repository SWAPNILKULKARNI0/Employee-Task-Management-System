import React, { useEffect, useState } from 'react';
import { setLocalStroage } from '../../utils/LocalStrorage';

const Header = ({ data, changeUser }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!data) {
      setUsername('Admin');
    } else {
      setUsername(data.firstName);
    }
  }, [data]);

  const logOut = () => {
     localStorage.removeItem('loggedInUser');
    changeUser('');
  };

  return (
    <div className="flex items-end justify-between p-6 bg-neutral-900 text-gray-200 rounded-lg shadow-lg border border-gray-700">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl text-yellow-400 font-semibold">{username} 👋</span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 px-5 py-2 rounded-md text-lg font-medium text-white hover:bg-red-500 transition-colors"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
