import React from 'react';
import {Link} from 'react-router-dom';
import './Filter.css';

const Filter = () => {
    return(
        <div className='filter'>
            <h2>Filter</h2>
            <ul>
                <li className="filter-detail">
                <Link to="/filter/action"> <span className="span">Action</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/adventure"> <span className="span">Adventure</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/anomation"> <span className="span">Animation</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/comedy"> <span className="span">Comedy</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/crime"> <span className="span">Crime</span> </Link>
                 </li>
                <li className="filter-detail">
                <Link to="/filter/documentary"> <span className="span">Documentary</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/drama"> <span className="span">Drama</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/family"> <span className="span">Family</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/fantasy"> <span className="span"> Fantasy</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/history"> <span className="span">History</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/horror"> <span className="span">Horror</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/music"> <span className="span">Music</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/mystery"> <span className="span">Mystery</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/romance"> <span className="span">Romance</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/science-fiction"> <span className="span">Science Fiction</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/tv-movie"> <span className="span">TV Movie</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/thriller"> <span className="span">Thriller</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/war"> <span className="span">War</span> </Link>
                </li>
                <li className="filter-detail">
                <Link to="/filter/western"> <span className="span">Western</span> </Link>
                </li>
            </ul>
        </div>
    );
};

export default Filter;