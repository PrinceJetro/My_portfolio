import React from 'react';
import ReactDOM from 'react-dom/client';
import dead from "./deadpool.gif"


export default function Project(props){
    return (        
       <a href={props.link} target='_blank'>
         <div class="project">
            <div>
                <img src={props.img} width={200} height={200}/>
                <h2>{props.title}</h2>
            </div>

       </div>

       </a>
    )
}