import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "./global";



const movieValidationSchema = yup.object({
    name: yup.string().required("why not fill the email"),
    poster: yup.string().required("Add the poster").min(4, "Need a bigger poster"),
    rating: yup.number().required("Mention Rating").min(0).max(10),
    summary: yup.string().required("Add Summary").min(20, "need a bigger summary"),
    trailer: yup.string().required("Add trailer link").min(4, "Need a bigger trailer"),


});

export function EditMovie() {

    // const [name, setName] = useState("");
    // const [poster, setPoster] = useState("");
    // const [rating, setRating] = useState("");
    // const [summary, setSummary] = useState("");
    // const [trailer, setTrailer] = useState("");
    // const navigate = useNavigate();

    const { id } = useParams();
    console.log(useParams());

    const [movie, setMovie] = useState(null);
    const getMovie = () => {
        fetch(`${API}/movies/${id}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mv) => setMovie(mv));
    };
    useEffect(() => getMovie(), []);

    console.log(movie);

    return (
        <div>

            {movie ? <EditMovieForm movie={movie} /> : <h2>Loading</h2>}
        </div>
    )
}

function EditMovieForm({ movie }) {

    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: movie.name,
            poster: movie.poster,
            rating: movie.rating,
            summary: movie.summary,
            trailer: movie.trailer,
        },

        validationSchema: movieValidationSchema,
        onSubmit: (updatedMovie) => {
            console.log("the values are", updatedMovie);
            updateMovie(updatedMovie);
        },


    });

    const navigate = useNavigate();


    const updateMovie = (updatedMovie) => {
        // const newMovie = {
        //     name: name,
        //     poster: poster,
        //     rating: rating,
        //     summary: summary,
        //     trailer: trailer,
        // };
        console.log(updatedMovie);

        // create copy of the movielist and add new movie to it
        // setMovieList([...movieList, newMovie]);


        fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
                "Content-Type": "application/json",
            },

        }).then(() => navigate("/films"));
    };



    return (
        <div>
            <form onSubmit={handleSubmit} className="add-movie-container">


                <TextField
                    label="name"
                    variant="outlined"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && errors.name}
                    helperText={touched.name && errors.name ? errors.name : null}
                />



                <TextField
                    label="poster"
                    variant="outlined"
                    name="poster"
                    value={values.poster}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.poster && errors.poster}
                    helperText={touched.poster && errors.poster ? errors.poster : null}
                />



                <TextField
                    label="Rating"
                    variant="outlined"
                    name="rating"
                    value={values.rating}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.rating && errors.rating}
                    helperText={touched.rating && errors.rating ? errors.rating : null}
                />

                <TextField
                    label="summary"
                    variant="outlined"
                    name="summary"
                    value={values.summary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.summary && errors.summary}
                    helperText={touched.summary && errors.summary ? errors.summary : null}
                />

                <TextField
                    label="Trailer"
                    variant="outlined"
                    name="trailer"
                    value={values.trailer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.trailer && errors.trailer}
                    helperText={touched.trailer && errors.trailer ? errors.trailer : null}

                />


                <Button type="submit" variant="contained" color="success">Save</Button>

            </form>
        </div >
    );
}
