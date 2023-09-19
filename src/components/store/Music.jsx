import React from 'react'
import { Link } from 'react-router-dom'
import { MusicStore } from '../../Data'


const Music = () => {

    const cardItem = (item) => {
        return (
            <div className="card bg-transparent border-2 text-white border-white py-2" key={item.id} style={{ width: "25rem", height: "35rem" }}>
                <img src={`https://i.ytimg.com/vi/${item?.ytId}/hqdefault.jpg`} className="card-img-top" alt={item.title} style={{ height: "23rem" }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <Link to={`store/music/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>
                </div>
            </div>
        );
    }


    return (
        <div className='bg-transparent'>
            <div className=" py-5">
                <div className="col-12 text-center">
                        <h1>Music in Form of CD</h1>
                        <hr />
                </div>
            </div>
                <div className="grid md:grid-cols-3 p-3 gap-3  grid-cols-1">
                    {MusicStore.map(cardItem)}
                </div>
        </div>
    )
}

export default Music

