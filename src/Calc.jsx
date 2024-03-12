import React, { useState } from 'react'

function Calc() {
    const [expression, setExpression] = useState('0');
    const handleSubmt = () => {
        try {
            const result = eval(expression);
            console.log(result);
            setExpression(result.toString());
        } catch (error) {
            setExpression('Invalid')
            console.log(error.message);
        }
    }
    const handleClickedButton = (btn) => {

        // handle double operator
        const ops = ['+', '-', '*', '/'];
        if (ops.includes(btn)) {
            const lastChar = expression[expression.length - 1];
            if (ops.includes(lastChar)) {
                const temp = expression.slice(0, expression.length - 1);
                setExpression(temp + btn);
                return;
            }
        }

        if (expression === '0' || expression === 'Invalid') {
            setExpression(btn);
        } else {
            setExpression(expression + btn);
        }
    }

    const handleBackspace = () => {
        let temp = expression.slice(0, expression.length - 1);
        if (temp === '') {
            setExpression('0');
        } else {
            setExpression(temp);
        }
    }

    return (
        <div className='mx-28 mt-8'>
            <h1 className='text-5xl pb-8 font-bold text-center'>Calculator</h1>
            <div>
                <h2
                    className='text-3xl font-bold px-8 py-5 rounded w-full outline-none text-neutral-200 bg-neutral-700 text-right'
                    type="text"
                >{expression}</h2>
            </div>
            <div className='grid grid-cols-4 gap-8 py-8 rounded'>
                <button onClick={() => handleClickedButton('7')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>7</button>
                <button onClick={() => handleClickedButton('8')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>8</button>
                <button onClick={() => handleClickedButton('9')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>9</button>
                <button onClick={() => handleClickedButton('/')} className='text-3xl font-bold px-2 py-5 rounded bg-blue-500'>/</button>
                <button onClick={() => handleClickedButton('4')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>4</button>
                <button onClick={() => handleClickedButton('5')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>5</button>
                <button onClick={() => handleClickedButton('6')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>6</button>
                <button onClick={() => handleClickedButton('*')} className='text-3xl font-bold px-2 py-5 rounded bg-blue-500'>x</button>
                <button onClick={() => handleClickedButton('1')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>1</button>
                <button onClick={() => handleClickedButton('2')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>2</button>
                <button onClick={() => handleClickedButton('3')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>3</button>
                <button onClick={() => handleClickedButton('-')} className='text-3xl font-bold px-2 py-5 rounded bg-blue-500'>-</button>
                <button onClick={() => handleClickedButton('0')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>0</button>
                <button onClick={() => handleClickedButton('.')} className='text-3xl font-bold px-2 py-5 rounded bg-neutral-700'>.</button>
                <button onClick={handleSubmt} className='text-3xl font-bold px-2 py-5 rounded bg-green-500'>=</button>
                <button onClick={() => setExpression('0')} className='text-3xl font-bold px-2 py-5 rounded bg-red-500'>c</button>
                <button onClick={handleBackspace} className='text-3xl font-bold px-2 py-5 rounded bg-yellow-500'>B</button>
                <button onClick={() => handleClickedButton('+')} className='text-3xl font-bold px-2 py-5 rounded bg-blue-500'>+</button>
            </div>
            <p className='text-normal text-center text-neutral-600 font-bold'>Developed By: OmPrakashMallik</p>
        </div>
    )
}

export default Calc
