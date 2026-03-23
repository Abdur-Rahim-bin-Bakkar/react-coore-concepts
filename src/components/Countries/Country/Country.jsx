import React, { useState } from 'react';

const Country = ({ country }) => {
    console.log()
    const [name, setName] = useState(false)
    return (
        <div className='card shadow m-2 p-3'>
            <img src={country.flags.flags.png} alt="" />
            <h1>{name ? country.name.official : country.name.common} </h1>
            <h1>{country.ccn3.ccn3}</h1>
            <h1>{country.cca3.cca3}</h1>
            <h1>{}</h1>

            {
                Object.values(country.currencies.currencies).map(data=><p>{data.symbol}  {data.name}</p>)
            }

            <button className='btn' onClick={() => setName(!name)}>{name ? "Common" : "Official"}</button>
            
        </div>
    );
};

export default Country;