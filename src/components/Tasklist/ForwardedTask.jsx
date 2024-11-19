import React from 'react'

const ForwardedTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-6 bg-purple-700 rounded-xl shadow-lg'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-white px-3 py-1 rounded text-sm'>
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
                <div className='w-full bg-purple-800 py-2 rounded-lg text-white text-sm'>
                    Forwarded To: <span className='font-semibold'>{data.forwardedTo}</span>
                </div>
            </div>
        </div>
    )
}

export default ForwardedTask
