import React from 'react'

import { Link } from 'react-router-dom';
import { DATA } from '../../Data'

const Product = () => {

    const cardItem = (item) => {
        return (
            <div className="card md:w-4/5 w-5/6 mx-auto bg-transparent text-white border-2 border-white" key={item.id} >
                <img src={item.productImage} className="card-img-top " alt={item.productName} style={{ height: "20rem" }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="lead">${item.price}</p>
                    <Link to={`/store/products/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="w-full py-5">
                <div className="">
                    <div className="w-full text-center">
                        <h1>Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
                <div className="grid md:grid-cols-3 p-3 md:gap-8 gap-3 grid-cols-1">
                    {DATA.map(cardItem)}
                </div>
        </div>
    )
}
export default Product
