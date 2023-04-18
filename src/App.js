import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Welcome } from './Welcome';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import { Msg } from './Msg';
import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { AddMovie } from './AddMovie';
import Button from '@mui/material/Button';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetail } from './MovieDetail';
import { NotFound } from './NotFound';
import { Home } from './Home';
import { BasicForm } from './BasicForm';
import { EditMovie } from './EditMovie';



function App() {


  const names = ["Arun", "Salviues", "Software Developer"]
  const users = [
    {
      name: "Arun",
      pic: "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg"
    },
    {
      name: "Salviues",
      pic: "https://petsutran.s3.ap-south-1.amazonaws.com/app/uploads/07-10-21/615e93b396787.jpg"
    },
    {
      name: "Software Developer",
      pic: "https://www.treehugger.com/thmb/DNdNh7AWPRQmzisENcWmyhoNm-0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/indiandog-472aca1ffaa1476a8e5347fdfbb81a3c.jpg"
    }
  ];


  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();



  return (

    <ThemeProvider theme={darkTheme}>



      <Paper sx={{
        minHeight: "100vh",
        borderRadius: "0px"
      }} elevation={10} >

        <div className="App">



          {/* {names.map(nm => <Welcome name={nm} />)} */}




          {/* {users.map((usr) => (<Msg name={usr.name} pic={usr.pic} />))} */}


          {/* <div className="movie-list">
        {movieList.map((mv) => (
          <Movie movie={mv} />
        ))}

      </div> */}
          {/* <AddColor /> */}




          <AppBar position="static">
            <Toolbar variant="dense">
              <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>Color Game</Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>Add Movie</Button>
              <Button color="inherit" onClick={() => navigate("/basicform")}>Basic Form</Button>
              <Button color="inherit"
                sx={{ marginLeft: "auto" }}
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >{mode === "light" ? "dark" : "light"} Mode</Button>
            </Toolbar>
          </AppBar>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            <Route path="/color-game" element={<AddColor />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/basicform" element={<BasicForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>



        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App;
