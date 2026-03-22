import React, { use } from 'react';
import User from './User';
const Users = ({pData}) => {
    const data = use(pData)
    return (
        <div>
            {
                data.map(d=> <User key={d.id} data={d}></User>)
            }
        </div>
    );
};

export default Users;