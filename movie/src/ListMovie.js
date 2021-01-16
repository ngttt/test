import React, { useEffect, useState } from 'react';
import './ListMovie.css';
import {Link} from 'react-router-dom';

function ListMovie (){
    const [items, setItems] = useState([]);

    useEffect( () => {
        fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=0a6d26d952bdd58d29ef7b7cb82a59db&language=vi-VN")
            .then(res => res.json())
            .then(json => 
                setItems(json.results)
                )
    },[]);

    console.log(items);
    return (
        <div className="list-movies">
            {items.map( item => {
                const urlPoster=`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`; 
                return (
                        <div className="list-movie" key = {item.id}>
                            <Link to={`/${item.id}`}>
                            <div className="vote">
                                <span className="vote-average">{item.vote_average}</span>
                                <span className="vote-count">{item.vote_count}</span>
                            </div>
                            <img className="poster" alt="" src={urlPoster}/>
                            <div className="name">
                                <p className="title">{item.title}</p>
                                <div className="en-date">
                                    <span className="language">{item.original_language}</span>
                                    <span className="release-date">{item.release_date}</span>
                                </div>
                            </div>
                            </Link>
                        </div>
            )})}
        </div>
    );
};

export default ListMovie;