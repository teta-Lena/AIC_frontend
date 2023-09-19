import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className="w-full py-2 bg-transparent">
                <div className=" md:w-5/6 w-[95%] mx-auto ">
                    <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner" style={{width:"95%",  borderRadius: "10px"}}>
                            <div className="carousel-item active">
                                <div className='w-full h-[70vh] bg-no-repeat bg-center' style={{backgroundImage:`url(/assets/images/home/img1.jpg)`}}></div>
                            </div>
                            <div className="carousel-item active">
                                <div className='w-full h-[70vh] bg-cover' style={{backgroundImage:`url(/assets/images/home/img2.jpg)`}}></div>
                            </div>
                            <div className="carousel-item active">
                                <div className='w-full h-[70vh] bg-cover' style={{backgroundImage:`url(/assets/images/home/img3.jpg)`}}></div>
                            </div>
                            <div className="carousel-item active">
                                <div className='w-full h-[70vh] bg-cover' style={{backgroundImage:`url(/assets/images/home/img4.jpg)`}}></div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
            </div>
            <div className="">
                    <Product />
            </div>
        </div>
    )
}

export default Home
