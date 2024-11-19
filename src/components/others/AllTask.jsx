import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-neutral-900 p-6 mt-6 rounded-xl h-64 shadow-lg border border-gray-700">
      <div className="mb-4 py-3 px-4 flex justify-between rounded-lg bg-neutral-800 shadow-md">
        <h2 className="text-lg font-semibold text-gray-300 w-1/5">Employee Name</h2>
        <h3 className="text-lg font-semibold text-gray-300 w-1/5">New Task</h3>
        <h3 className="text-lg font-semibold text-gray-300 w-1/5">Active Task</h3>
        <h3 className="text-lg font-semibold text-gray-300 w-1/5">Completed Task</h3>
        <h3 className="text-lg font-semibold text-gray-300 w-1/5">Failed Task</h3>
      </div>

      <div id="noscrollbar" className="h-[75%] overflow-auto">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="py-3 px-4 flex justify-between mb-2 bg-neutral-800 rounded-lg border border-gray-700 shadow-sm"
          >
            <h2 className="text-lg font-medium text-gray-300 w-1/5">{elem.firstName}</h2>
            <h3 className="text-lg font-medium text-blue-500 w-1/5">{elem.taskCount.newTask}</h3>
            <h3 className="text-lg font-medium text-yellow-400 w-1/5">{elem.taskCount.active}</h3>
            <h3 className="text-lg font-medium text-green-500 w-1/5">{elem.taskCount.completed}</h3>
            <h3 className="text-lg font-medium text-red-500 w-1/5">{elem.taskCount.failed}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
