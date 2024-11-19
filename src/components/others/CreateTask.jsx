import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [category, setCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [userData, setUserData] = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();

        if (!taskTitle || !taskDate || !assignedTo || !category || !taskDescription) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        const newTask = {
            taskTitle,
            taskDate,
            category,
            taskDescription,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        const data = userData;
        let taskAssigned = false;

        data.forEach((elem) => {
            if (assignedTo === elem.firstName) {
                elem.tasks.push(newTask);
                elem.taskCount.newTask += 1;
                taskAssigned = true;
            }
        });

        if (!taskAssigned) {
            alert(`No employee found with the name "${assignedTo}". Please check and try again.`);
            return;
        } else {
            setUserData(data);
        }

        setTaskTitle('');
        setTaskDate('');
        setAssignedTo('');
        setCategory('');
        setTaskDescription('');
    };

    return (
        <div className="bg-neutral-900 p-6 mt-8 rounded-xl shadow-lg border border-gray-700">
            <form onSubmit={submitHandler} className="flex flex-wrap items-start justify-between">
                {/* Left Side Input Fields */}
                <div className="w-full md:w-1/2 space-y-4 pr-4">
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Task Title</label>
                        <input 
                            className="text-sm w-full px-3 py-2 rounded-lg bg-neutral-800 border border-gray-600 focus:border-teal-500 focus:outline-none placeholder-gray-500"
                            type="text" 
                            placeholder="Make a new Task" 
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Date</label>
                        <input 
                            className="text-sm w-full px-3 py-2 rounded-lg bg-neutral-800 border border-gray-600 focus:border-teal-500 focus:outline-none placeholder-gray-500"
                            type="date" 
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                        />
                    </div>
                    <div>    
                        <label className="block text-sm text-gray-300 mb-1">Assign To</label>
                        <input 
                            className="text-sm w-full px-3 py-2 rounded-lg bg-neutral-800 border border-gray-600 focus:border-teal-500 focus:outline-none placeholder-gray-500"
                            type="text" 
                            placeholder="Employee Name" 
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Category</label>
                        <input 
                            className="text-sm w-full px-3 py-2 rounded-lg bg-neutral-800 border border-gray-600 focus:border-teal-500 focus:outline-none placeholder-gray-500"
                            type="text" 
                            placeholder="Design, dev, etc"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                </div>

                {/* Right Side Description Section */}
                <div className="w-full md:w-1/2 flex flex-col mt-4 md:mt-0 md:pl-6">
                    <label className="block text-sm text-gray-300 mb-1">Description</label>
                    <textarea 
                        className="w-full h-40 text-sm px-3 py-2 rounded-lg bg-neutral-800 border border-gray-600 focus:border-teal-500 focus:outline-none placeholder-gray-500" 
                        placeholder="Enter task description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    />
                    <button className="bg-teal-600 py-2 px-5 rounded-lg text-sm mt-4 hover:bg-teal-500 transition-colors">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
