import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div className='card shadow m-2 p-3'>
            <h1>{country.name.common}</h1>
        </div>
    );
};

export default Country;