import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)
    const add = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    const ShowOrHide = ()=>{
        setShow(!show)
    }

    return (
        <div className="animate-pulse">
            <button className='btn m-5' onClick={ShowOrHide}>{show? 'Hide' : "Show"}</button>
            {
                show?<div className='w-70 m-5 border border-success rounded-md'>
                <p className='mx-auto text-center'>{count}</p>
                <button className='btn m-5' onClick={add}>+</button>
                <button className='btn m-5' onClick={minus}>-</button>
                <button className='btn m-5' onClick={reset}>Reset</button>
                <span className=''></span>
                <input type="checkbox" value="synthwave" class="toggle theme-controller" />
            </div>:
            ''
            }
        </div>
    );
};

export default Count;