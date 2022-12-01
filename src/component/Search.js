import React from 'react'
import'./Style.css'

export default function Search() {
  return (
    <div>
      <section class="search_area">
      <div className="container bg-danger">
      <div className="jumbotron bg-danger">
      <div className="search">
        <h3 className="text-center mb-5 text-white">Search Your Course</h3>
        <div className="search_course">
          <form className="form-inline my-2 my-lg-0 form_text ">
            <input className="form-control mr-sm-2" type="text" placeholder="Course" aria-label="course"></input>
            <input className="form-control mr-sm-2" type="text" placeholder="Category" aria-label="category"></input>
            <button className="btn btn-outline-dark my-2 my-sm-0  px-5 bg-danger text-white" type="submit">Search Course</button>
          </form>
        </div>
        </div>
      </div>
      </div>
    </section>
    </div>
  )
}
