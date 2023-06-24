import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Iam from './components/iam';
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolo';
import Contact from './components/contact';
import Footer from './components/footer';


export default function App(props){
    return (
        <div className='container-fluid'>
           < Navbar/>
           < Iam/>
           < About/>
           < Services/>
           <Portfolio/>
           <Contact/>
           <Footer/>
        </div>

    )
}