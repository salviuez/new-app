import React from "react";
import { Counter } from './Counter';

export function Msg({ pic, name }) {
    //console.log(props)
    return (
        <div className="image-container">
            <img className="profile-pic" src={pic}
                alt={name} />
            <h1>Hello, {name}</h1>
            <Counter />
        </div>
    );
}
