import React from 'react';
import ReactDOM from 'react-dom/client';



export default function App(props){
    return (        
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={props.img} alt="prop" width={300} height={300} />
            </div>
            <div class="flip-card-back">
            <h1>{props.title}</h1> 
            <p>{props.description}</p> 
            </div>
        </div>
        </div>

    )
}