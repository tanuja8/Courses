import React from 'react'
import './Style.css'

export default function Courses() {
    return (
        <div>
            <div className='jumbotron'>
                <div className='container '>
                    <h3 className=" text-center">Tutorials Library</h3>
                    <p className="text-center ">learn online courses from our website with easy and lucide explanation</p>
                    <div className='row m-3 p-3'>
                        <div className='col-lg-4'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-KNowj8kwzclXEzcLTBnBHaQhpCKwC-kzQ&usqp=CAU" alt="Card image cap" />
                                <div class="card-body card_bodyeffect">
                                    <h6>Computer Science</h6>
                                    <p class="card-text">120 Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="http://127.0.0.1:5500/web.jpg" alt="Card image cap" />
                                <div class="card-body card_bodyeffect">
                                    <h6>Web Development</h6>
                                    <p class="card-text">77 Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="http://127.0.0.1:5500/programming.jpg" alt="Card image cap" />
                                <div class="card-body card_bodyeffect">
                                    <h6>Programming Tutorials</h6>
                                    <p class="card-text">55 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row m-3 p-3'>
                        <div className='col-lg-4'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="http://127.0.0.1:5500/java.jpg" alt="Card image cap" />
                                <div class="card-body card_bodyeffect">
                                    <h6 class="card-title">Java Technologies</h6>
                                    <p class="card-text">40 Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="http://127.0.0.1:5500/mobile.jpg" alt="Card image cap" />
                                <div class="card-body card_bodyeffect">
                                    <h6 class="card-title">Mobile Development</h6>
                                    <p class="card-text">220 courses</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="http://127.0.0.1:5500/Database.jpg" alt="Card image cap" />
                                <div class="card-body card_bodyeffect">
                                    <h6 class="card-title">DataBase tutorials</h6>
                                    <p class="card-text">25 courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
