import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.css';
import 'history';

const Nav = () => {
    const search = useRef();
    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault();
        if (search.current.value === "")
            {
                history.push("/")
            }
        else {
            history.push(`/search/${search.current.value}`)
        }
    };  

    return(
        <div className="navbar">
            <Link to="/"> <img className="img-nav" alt="logo" src="https://c1.staticflickr.com/1/293/20195446071_af78f92732_b.jpg"/> </Link>
            <input className="search" type='text' ref={search} placeholder="Search for movie"/>
            <button className="btn-search" onClick={handleSubmit}>Search</button>
        </div>
    )
};

export default Nav;