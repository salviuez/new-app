import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";


export function MovieDetail() {
    const { id } = useParams();
    console.log(useParams());

    const [movie, setMovie] = useState({});
    const getMovie = () => {
        fetch(`${API}/movies/${id}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mv) => setMovie(mv));
    };
    useEffect(() => getMovie(), []);

    const styles = {
        color: movie.rating > 8.5 ?
            "green" : "red",
    };
    const navigate = useNavigate();
    return (
        <div>
            <iframe width="100%" height="800" src={movie.trailer}
                title="No Country For Old Men (2007) Official Trailer - Tommy Lee Jones, Javier Bardem Movie HD"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
      picture-in-picture" allowfullscreen></iframe>
            <div className="movie-detail-container">
                <div className="movie-specs">
                    <h2 className="movie-name">
                        {movie.name}

                    </h2>
                    <p style={styles} className="movie-rating"> ⭐{movie.rating} </p>
                </div>

                <p className="movie-summary">{movie.summary}</p>

            </div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
