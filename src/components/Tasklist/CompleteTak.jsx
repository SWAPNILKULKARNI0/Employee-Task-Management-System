import React from 'react'

const CompleteTak = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-6 bg-[#1D8348] rounded-xl shadow-lg'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-700 text-white px-3 py-1 rounded text-sm'>
                {data.category}
            </h3>
            <h4 className='text-sm text-gray-300'>
                {data.taskDate}
            </h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold text-white'>
            {data.taskTitle}
        </h2>
        <p className='text-sm mt-2 text-gray-300'>
            {data.taskDescription}
        </p>
        <div className='mt-4'>
            <button className='w-full bg-green-700 py-2 rounded-lg text-white text-sm hover:bg-green-800 transition duration-300'>
                Task Completed
            </button>
        </div>
    </div>
  )
}

export default CompleteTak
