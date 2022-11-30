import React from 'react'

export default function Courses() {
    return (
        <div>
            <div className='jumbotron'>
                <div className='container'>
                    <h3 className=" text-center">Tutorials Library</h3>
                    <p className="text-center ">learn online courses from our website with easy and lucide explanation</p>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div class="card" style={{width: "18rem"}}>
                                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-KNowj8kwzclXEzcLTBnBHaQhpCKwC-kzQ&usqp=CAU" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3>Computer Science</h3>
                                        <p class="card-text">120 Courses</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
