import React from 'react'

function Calc() {
    return (
        <div className='mx-28 mt-8'>
            <h1 className='text-5xl pb-8 font-bold text-center'>Calculator</h1>
            <div>
                <input className='text-3xl font-bold px-8 py-5 rounded w-full outline-none text-neutral-200 bg-neutral-700 text-right' type="text" />
            </div>
            <div className='grid grid-cols-4 gap-8 py-8 rounded'>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>7</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>8</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>9</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-blue-500'>/</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>4</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>5</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>6</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-blue-500'>x</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>1</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>2</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>3</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-blue-500'>-</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>0</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>.</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-red-500'>=</button>
                <button className='text-3xl font-bold px-2 py-5 rounded bg-blue-500'>+</button>
            </div>
            <p className='text-normal text-center text-neutral-600 font-bold'>Developed By: OmPrakashMallik</p>
        </div>
    )
}

export default Calc
