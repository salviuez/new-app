import React, { useState } from "react";
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";



export function Movie({ movie, deleteButton, editButton }) {
    // const movie = {
    //   name: "Vikram",
    //   poster:
    //     "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    //   rating: 8.4,
    //   summary:
    //     "Members of a black ops team must track and eliminate a gang of masked murderers."
    // };
    //conditional styling
    const styles = {
        color: movie.rating > 8.5 ? "green" : "red"
    };

    const navigate = useNavigate();

    const [show, setShow] = useState(true);
    return (
        <Card className="movie-container">
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <CardContent>
                <div className="movie-specs">
                    <h2 className="movie-name">{movie.name}
                        <IconButton onClick={() => setShow(!show)} aria-label="delete">
                            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>

                        <IconButton onClick={() => navigate(`/movies/${movie.id}`)} aria-label="delete">
                            <InfoIcon />
                        </IconButton>

                    </h2>
                    <p style={styles} className="movie-rating"> ⭐{movie.rating} </p>
                </div>

                {show ? <p className="movie-summary">{movie.summary}</p> : null}
            </CardContent>
            <CardActions>

                <Counter /> {editButton} {deleteButton}
            </CardActions>

        </Card>
    );
}
