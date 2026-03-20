import React from 'react';

const Movie = ({ data }) => {
    console.log(data)
    return (
        <div className='card shadow-md border-2 border-success m-5 p-5'>
            <img src={data.image} alt="" />
            <h1>Acctors Name: <b>{data.actor_name}</b></h1>
            <h3>Movie Name: <b>{data.best_movie}</b></h3>
            <h1>Movie Price: <b>{data.movie_income_crore}</b></h1>
            <h1>Director: <b>{data.director}</b></h1>
            <h1>Writer: <b>{data.writer}</b></h1>
        </div>
    );
};

export default Movie;