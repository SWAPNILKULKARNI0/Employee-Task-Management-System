import React from 'react';

const TaskListCounter = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] px-9 py-6 bg-red-700 shadow-lg hover:bg-red-800 transition duration-300">
        <h2 className="text-3xl font-semibold text-white">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium text-gray-300">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-blue-700 shadow-lg hover:bg-blue-800 transition duration-300">
        <h2 className="text-3xl font-semibold text-white">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium text-gray-300">Completed Tasks</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-green-700 shadow-lg hover:bg-green-800 transition duration-300">
        <h2 className="text-3xl font-semibold text-white">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium text-gray-300">Active Tasks</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-yellow-700 shadow-lg hover:bg-yellow-800 transition duration-300">
        <h2 className="text-3xl font-semibold text-white">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium text-gray-300">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListCounter;
