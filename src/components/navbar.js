import React from "react";

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
  <a class="navbar-brand" href="#">Jetro</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://drive.google.com/file/d/10r2fZI4apZqK47dpCIbp5NEzExcQ57CW/view?usp=drive_link">Download Resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/jephthah-adegbuyi-38a76524a">linkedin <i className="fa fa-linkedin"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://wa.me/+2348088981691">Whatsapp<i className="fa fa-whatsapp"></i> </a>
      </li>
  </ul>
  </div>
</nav>
    )
}