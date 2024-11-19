import React from 'react';
import ActiveTask from './ActiveTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompleteTak from './CompleteTak';
import ForwardedTask from './ForwardedTask';

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='h-[65%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((elem, idx) => {
        switch (true) {
          case elem.active:
            return <ActiveTask key={idx} data={elem} taskKey={idx} />;
          case elem.completed:
            return <CompleteTak key={idx} data={elem} />;
          case elem.failed:
            return <FailedTask key={idx} data={elem} />;
          case elem.forwarded:
            return <ForwardedTask key={idx} data={elem} />;
          case elem.newTask:
            return <NewTask key={idx} data={elem} taskKey={idx} />;
          default:
            return null; // If no task matches any condition
        }
      })}
    </div>
  );
};

export default TaskList;
