import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a class="navbar-brand" href="#">
        <h3><i class="fa-solid fa-book"></i> Tutorpoint</h3></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="">Coding Example</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="">Course</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="">Ebooks</a>
          </li>
        </ul>
        <button type="button" class="btn btn-danger btn-lg px-5">Login</button>
      </div>
    </nav>
    </div>
  )
}
