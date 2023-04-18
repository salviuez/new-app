import React from "react";
import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global.js"


export function MovieList() {

    const [movieList, setMovieList] = useState([]);

    const getMovies = () => {
        fetch(`${API}/movies`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mvs) => setMovieList(mvs));
    };

    useEffect(() => getMovies(), [])




    const deleteMovie = (id) => {
        fetch(`${API}/movies/${id}`, {
            method: "DELETE",
        }).then(() => getMovies(),);

    }


    const navigate = useNavigate();
    return (
        <div>
            <div className="movie-list">
                {movieList.map((mv) => (
                    <Movie movie={mv}

                        deleteButton={
                            <IconButton
                                onClick={() => deleteMovie(mv.id)}
                                color="error"
                                aria-label="delete">
                                <DeleteIcon />
                            </IconButton>

                        }

                        editButton={
                            <IconButton
                                onClick={() => navigate(`/movies/edit/${mv.id}`)}
                                color="secondary"
                                aria-label="edit">
                                <EditIcon />
                            </IconButton>

                        }
                    />
                ))}
            </div>
        </div>

    );

}
