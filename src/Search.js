import React,{ useEffect, useState } from 'react';
import './ListMovie.css';
import {Link} from 'react-router-dom';

const Search = ({match}) => {

    const [data, setData] = useState([]);
    const string = ( (match.url).slice( 8, ((match.url).length) ) );
    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0a6d26d952bdd58d29ef7b7cb82a59db&language=vi-VN&page=1&include_adult=false&query=${string}`)
            .then(res => res.json())
            .then(json => 
                setData(json.results)
                )
    },[string]);


    

    console.log(string);

    console.log(data);

    return(
        <div className="list-movies">
            {data.map( item => {
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

export default Search;