import React from 'react';

const User = ({data}) => {
    console.log(data)
    const {name, id,username, email,website ,phone, company:{name:CName,catchPhrase,bs}} = data
    return (
        <div className='card border border-success p-5 m-5'>
            <h1>{name}</h1>
            <h1>{username}</h1>
            <h1>{email}</h1>
            <h1>{website}</h1>
            <h1>{phone}</h1>
            <h1>{CName}</h1>
            <h1>{catchPhrase}</h1>
            <h1>{bs}</h1>
        </div>
    );
};

export default User;