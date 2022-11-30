import React from 'react'
import './Style.css'

export default function Signup() {
  return (
    <div>
      <div className="jumbotron background_img">
      <div className="container">
        <h1 className="text-white text-center mb-5">Get the Best Free online Courses <br/>
        New User Sign Up Now</h1>
        <form className="form-inline my-2 my-lg-0 form_text">
          <input className="form-control mr-sm-2" type="text" placeholder="Name" aria-label="Name"></input>
          <input className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email"></input>
          <button className="btn btn-outline-dark my-2 my-sm-0  px-5 bg-danger text-white" type="submit">Sign Up Now</button>
        </form>
      </div>
    </div>
    </div>
  )
}
