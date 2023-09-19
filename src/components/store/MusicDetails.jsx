import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { MusicStore} from '../../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../../redux/actions/index'

const MusicDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    {/* Now we need a music id which is pass from the music page. */}
    const proid = useParams();
    const proDetail = MusicStore.filter(x=>x.id == proid.id)
    const music = proDetail[0];
    console.log(music);

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (music) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(music))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(music))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
        <div className=" my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto music">
                    <img src={`https://i.ytimg.com/vi/${music?.ytId}/hqdefault.jpg`} alt={music.title}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{music.title}</h1>
                    <hr />
                    <h2 className="my-4">${music.price}</h2>
                    <p className="lead">{music.description}</p>
                    <button onClick={()=>handleCart(music)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MusicDetail
