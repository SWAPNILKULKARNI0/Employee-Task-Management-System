import React from 'react';
import Header from '../others/Header';
import TaskListCounter from '../others/TaskListCounter';
import TaskList from '../Tasklist/TaskList';

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <div className="p-10 bg-black h-full text-gray-200">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <Header data={data} changeUser={changeUser} />

        {/* Task Counter Section */}
        <div className="p-6 bg-neutral-900 rounded-xl shadow-lg border border-gray-700">
          <TaskListCounter data={data} />
        </div>

        {/* Task List Section */}
        <div className="p-6 bg-neutral-900 rounded-xl shadow-lg border border-gray-700">
          <TaskList data={data} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
