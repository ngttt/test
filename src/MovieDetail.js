import React, { useEffect, useState } from 'react';
import './MovieDetails.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const MovieDetail = ({match}) => {
    const [detail, setDetail] = useState({});
    const [cast, setCast] = useState([]);
    
    useEffect ( () => {
        fetchCast();
        fetchItem();
    },[]);

    const fetchCast = async () => {
        const fetchItem = await fetch(
            `https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=0a6d26d952bdd58d29ef7b7cb82a59db`
        );
        const detail = await fetchItem.json();
        setCast(detail);
    }

    const casts = cast.cast;

    console.log(casts);

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=0a6d26d952bdd58d29ef7b7cb82a59db&language=vi-VN`
        );
        const detail = await fetchItem.json();
        setDetail(detail);
    }

    console.log(detail);

    return(
        <div>
            <div className="movie-detail">
                <img className="img-detail" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${detail.backdrop_path}`} alt=""></img>
                <div>
                    <h1 className="p">{detail.original_title}</h1>
                    <h3 className="p">Nội dung: {detail.overview}</h3>
                    <h3 className="p">Độ phổ biến: {detail.popularity}</h3>
                    <h3 className="p">Điểm IMDB: {detail.vote_average}</h3>
                    <h3 className="p">Lượt vote: {detail.vote_count}</h3>
                </div>
            </div>
                <div className="movieinfo-actor-container">
                <h2>Diễn viên</h2>
                <div className="movie-info-actor">
                     {casts && casts.map((actor) => {
                            return (
                                <SwiperSlide>
                                <div
                                    className="actor-container"
                                    key={actor.cast_id}
                                > 
                                    <div className="actor-image-thumbnail">
                                        <img
                                            className="actor-image-thumbnail"
                                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="actor-info">
                                        <div className="actor-name">
                                            {actor.name} -{" "}
                                            <i className="color-white">
                                                {actor.character}
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>);
                        })}
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;