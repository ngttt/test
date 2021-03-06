import { useEffect, useState } from "react";
import React from 'react';
import './ListMovie.css';
import { Link } from "react-router-dom";

const FilterList = ({match}) => {

    const genre_API = [
        { name: "action",
            id: 28
        },
        { name: "adventure",
            id: 12
        },
        { name:"animation",
            id: 16
        },
        { name:"comedy",
            id: 35
        },
        { name:"crime",
            id: 80
        },
        { name:"documentary",
            id:99
        },
        { name:"drama",
            id: 18
        },
        { name:"family",
            id: 10751
        },
        { name:"fantasy",
            id: 14
        },
        { name:"history",
            id: 36
        },
        { name:"horror",
            id: 27
        },
        { name:"music",
            id: 10402
        },
        { name:"mystery",
            id: 9648
        },
        { name:"romance",
            id: 10749
        },
        { name:"science-fiction",
            id: 878
        },
        { name:"tv-movie",
            id: 10770
        },
        { name:"thriller",
            id: 53
        },
        { name:"war",
            id: 10752
        },
        { name:"western",
            id: 37
        }
    ]

    const [items, setItems] = useState([]);

    useEffect( () => {
        fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=0a6d26d952bdd58d29ef7b7cb82a59db&language=vi-VN")
            .then(res => res.json())
            .then(json =>
                setItems(json.results)
                )
    },[]);

    console.log(items)

    const genre_name = (match.url).slice(8, match.url.length); 

    const id = genre_API.filter( genre_id => {
            if (genre_id.name === genre_name)
            return genre_id.id;
    });

    const fiteredItems = items.filter( item => {
        return item.genre_ids.indexOf(id[0].id) != -1
    })

    console.log('fiteredItems', fiteredItems);
    
    return(
        <div>
            <h1>{genre_name}</h1>
            <div className="list-movies">
            {fiteredItems.map( item => {
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
        </div>
    );
}

export default FilterList;