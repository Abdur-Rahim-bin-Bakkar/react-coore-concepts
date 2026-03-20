import React from 'react';

const Student = ({data}) => {
    return (
        <div className={`card border-2 ${data.result === 'Pass' ? 'border-success ' : "border-error"} m-4 p-4 text-center space-y-3`}>
            <h1 className=' text-center'>{data.name}</h1>
            <h2>{data.math}</h2>
            <h2>{data.english}</h2>
            <h2>{data.science}</h2>
            <h2>{data.average}</h2>
            <p>{data.result}</p>
            <button className={`btn ${data.result === 'Pass' ? 'btn-success' : 'btn-error'}`}>{data.result ==='Pass'? `Gread ${data.average}`: 'Resubmit'} </button>
        </div>
    );
};

export default Student;