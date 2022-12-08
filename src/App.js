import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

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
  return (

    // <div className="App">

    //   {names.map(nm => <Welcome name={nm} />)}
    // </div>
    <div className="App">
      {users.map((usr) => (<Msg name={usr.name} pic={usr.pic} />))}

    </div>



  )
}

function Welcome({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )

}

function Msg({ pic, name }) {
  //console.log(props)
  return (
    <div className="image-container">
      <img className="profile-pic" src={pic}
        alt={name} />
      <h1>Hello, {name}</h1>
      <Counter />
    </div>
  )
}

function Counter() {
  //let like = 10;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}> 👍 {like}</button>
      <button onClick={() => setDisLike(disLike + 1)}> 👎{disLike} </button>


    </div>
  );
}

export default App;
