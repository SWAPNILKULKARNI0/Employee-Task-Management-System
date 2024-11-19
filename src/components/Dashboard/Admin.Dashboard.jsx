import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="h-full w-full bg-black text-gray-200 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Header changeUser={changeUser} />

        {/* Create Task Section */}
        <div className="mt-10 p-6 bg-neutral-900 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Create Task</h2>
          <CreateTask />
        </div>

        {/* All Tasks Section */}
        <div className="mt-10 p-6 bg-neutral-900 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">All Tasks</h2>
          <AllTask />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
