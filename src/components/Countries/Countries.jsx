import React, { use } from 'react';
import Country from './Country/Country';

const Countries = ({fetchCountries}) => {
    const data = use(fetchCountries).countries
    return (
        <div className='border border-success m-3 p-3 rounded-md'>
            <h1 className='text-2xl font-bold text-center'>Total Countries: {data.length}</h1>
            
            <div className="grid grid-cols-3 my-3 mx-auto gap-3">
                {
                    data.map(country=> <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;