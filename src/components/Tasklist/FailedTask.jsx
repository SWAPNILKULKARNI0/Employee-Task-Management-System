import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-6 bg-[#C0392B] rounded-xl shadow-lg'>
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
            <button className='w-full bg-red-700 py-2 rounded-lg text-white text-sm hover:bg-red-800 transition duration-300'>
                Task Failed
            </button>
        </div>
    </div>
  )
}

export default FailedTask
