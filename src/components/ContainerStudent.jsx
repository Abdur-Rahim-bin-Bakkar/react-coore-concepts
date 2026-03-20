import React, { use } from 'react';
import Student from './Student';

const ContainerStudent = ({students}) => {
    const data = use(students)
    // console.log(data)
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                data.map(d=>{
                   return <Student key={d.id} data={d}></Student>
                })
            }
        </div>
    );
};

export default ContainerStudent;