import React, { useState } from 'react';

const Event = () => {
    const [name, setName] = useState("")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")

    const hendelFirst = (e) => {
        setFirst(e.target.value)
        setName(e.target.value + " " + last)
    }
    const hendelLase = (e) => {
        setLast(e.target.value)
        setName(first + " " + e.target.value)
    }
    return (
        <div className='p-5 space-y-3'>
            <input type="text" className='input' placeholder='add first name' name="" id="" onKeyUp={(e) => hendelFirst(e)} />

            <input type="text" className='input' placeholder='add last name' name="" id="" onKeyUp={(e) => hendelLase(e)} />
            <h3>{name}</h3>
        </div>
    );
};

export default Event;