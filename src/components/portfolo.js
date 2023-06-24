import React from 'react';
import ReactDOM from 'react-dom/client';
import Project from './projects';



export default function Portfolio(props){
    return (        
        <div className="portfolio">
            <h1>PORTFOLIO</h1>
            <p>Below are some of the projects i have worked, Click on them to be taken to the deployed site</p>
            <hr/>
            <div className='d-flex flex-wrap'>
            <Project title="Social Media Web Application"  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCxC50deMA_zlCtCbq1OSpmwzNU6zzHQNaA&usqp=CAU" link="https://jetrostagram.vercel.app" />
            <Project title="Chat App"  link="https://prince-jetro-chat-app.vercel.app/" img="https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg"/>
            <Project title="An E-commerce Web Application"  link="https://zingy-pika-0e20f3.netlify.app/" img="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg"/>
            <Project title="Movie Count down App"  link="https://resilient-mooncake-8e1aeb.netlify.app/" img="https://sm.ign.com/ign_nordic/gallery/m/marvel-stu/marvel-studios-the-marvels-trailer-stills_hp24.jpg"/>
            <Project title="Movie Trailer App"  link="https://funny-cuchufli-e32482.netlify.app/" img="https://qph.cf2.quoracdn.net/main-qimg-7408e7e7d9f3363f9b64473728646cfc"/>
            <Project title="Quiz Game App"  link="https://stirring-duckanoo-2a54e9.netlify.app" img="https://allinpython.com/wp-content/uploads/2022/07/game-1024x640.png"/>
            <Project title="Guess The Word Game"  link="https://jetro-guessing-game.vercel.app/" img="https://play-lh.googleusercontent.com/XOvH8XNuTflDrIjn4FqMifuGBE7WeADxd3cGpuBHIjBax9lchywY5v_kDqi-nmxjHFA"/>
            <Project title="Rock Paper Scissors Game"  link="https://rock-paper-scissors-one-brown.vercel.app/" img="https://media.tenor.com/OvHQWExcPh0AAAAM/cartoons-being-ian.gif"/>
            <Project title="Advice Generator"  link="https://jetros-frontend-mentor-advice-generator-api.vercel.app/" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zehk3hIcYtrDRyLzhHnq6TP-Ydkp7owT2w&usqp=CAU"/>
          
            
            </div>

       </div>

    )
}