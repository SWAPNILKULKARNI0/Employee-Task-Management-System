import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data, taskKey }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [employeeTaskCount, setEmployeeTaskCount] = useState({});
  const [forwardTo, setForwardTo] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user && user.data) {
      const firstName = user.data.firstName;
      const employee = userData.find((e) => e.firstName === firstName);
      if (employee) {
        setTasks([...employee.tasks]);
        setEmployeeTaskCount({...employee.taskCount});
      }
    }
  }, [userData]);

  const taskAccepted = (tasks, taskKey) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const firstName = user.data.firstName;
    const employee = userData.find((e) => e.firstName === firstName);

    const countToBeUpdated = { ...employeeTaskCount };
    countToBeUpdated.active += 1;

    const taskToUpdate = [...tasks];
    taskToUpdate[taskKey].active = true;
    taskToUpdate[taskKey].completed = false;
    taskToUpdate[taskKey].newTask = false;
    taskToUpdate[taskKey].failed = false;

    setTasks(taskToUpdate);

    const updatedEmployee = {
      ...employee,
      taskCount: countToBeUpdated,
      tasks: taskToUpdate,
    };

    const updatedData = [
      updatedEmployee,
      ...userData.filter((e) => e.firstName !== firstName),
    ];

    setUserData(updatedData);
  };

  const forwardTask = (e, tasks, taskKey) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const firstName = user.data.firstName;
    const employee = userData.find((e) => e.firstName === firstName);

    if (!forwardTo) {
      alert("Please enter a name to forward the task.");
      return;
    }

    const countToBeUpdated = { ...employeeTaskCount };
    countToBeUpdated.newTask -= 1;

    const taskToUpdate = [...tasks];
    taskToUpdate[taskKey].active = false;
    taskToUpdate[taskKey].completed = false;
    taskToUpdate[taskKey].newTask = false;
    taskToUpdate[taskKey].failed = false;
    taskToUpdate[taskKey].forwarded = true;
    taskToUpdate[taskKey].forwardedTo = forwardTo;

    setTasks(taskToUpdate);

    const updatedEmployee = {
      ...employee,
      taskCount: countToBeUpdated,
      tasks: taskToUpdate,
    };

    const updatedData = [
      updatedEmployee,
      ...userData.filter((e) => e.firstName !== firstName),
    ];

    const newTask = {
      ...taskToUpdate[taskKey],
      newTask: true,
      forwarded: false,
      forwardedBy: firstName,
    };

    let taskAssigned = false;

    updatedData.forEach((elem) => {
      if (forwardTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask += 1;
        taskAssigned = true;
      }
    });

    if (!taskAssigned) {
      alert(`No employee found with the name "${forwardTo}". Please check and try again.`);
      return;
    } else {
      setUserData(updatedData);
    }
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-100">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-100">{data.taskDescription}</p>
      <div className="mt-4">
        <button
          onClick={() => taskAccepted(tasks, taskKey)}
          className="w-full bg-emerald-500 text-white py-2 rounded-md"
        >
          Accept Task
        </button>
        {data.forwardedBy && (
          <div className="mt-2 w-full bg-purple-600 text-white py-1 rounded-md">
            Forwarded by: {data.forwardedBy}
          </div>
        )}
      </div>
      <div className="mt-4">
        <form onSubmit={(e) => forwardTask(e, tasks, taskKey)} className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <input
              className="text-sm px-2 py-1 w-full rounded outline-none bg-white text-black border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Forward To"
              value={forwardTo}
              onChange={(e) => setForwardTo(e.target.value)}
            />
          </div>
          <div className="w-1/2 flex flex-col items-start">
            <button className="w-full bg-purple-600 text-white py-2 rounded-md">
              Forward Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
