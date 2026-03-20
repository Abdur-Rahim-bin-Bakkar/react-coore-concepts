import React, { use } from 'react';
import Movie from './Movie';

const MovieCont = ({movies}) => {
    const data = use(movies)
    return (
        <div>
            {
                data.map(d=>{
                    return <Movie key={d.id} data={d}></Movie>
                })
            }
        </div>
    );
};

export default MovieCont;