import React, { useState } from 'react';

const Cricket = () => {
    const [score, setScore] = useState(0)
    return (
        <div className='border-2 border-success m-5 p-5 rounded-2xl'>
            <h1>sakib all hassan</h1>
            <h1>Score: {score}</h1>
            <div className=" space-x-3 m-4">
                <button className='btn btn-success' onClick={() => setScore(score + 1)}>ADD</button>
                <button className='btn btn-success' onClick={() => setScore(score + 4)}>ADD 4</button>
                <button className='btn btn-success' onClick={() => setScore(score + 6)}>ADD 6</button>
            </div>
        </div>
    );
};

export default Cricket;