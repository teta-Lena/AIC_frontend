import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { DATA } from '../../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../../redux/actions/index'

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    {/* Now we need a product id which is pass from the product page. */ }
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            <div className="md:w-4/5 mx-auto py-3 font-light">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                    <div className="md:w-5/6 w-5/6 mx-auto min-h-[45vh] bg-contain bg-no-repeat" style={{backgroundImage:`url(${product.productImage})`}}>
                    </div>
                    <div className="md:text-base  text-sm grid gap-2 grid-flow-row">
                        <p className="h1">{product.productName}</p>
                        <hr />
                        <p className="h2">${product.price}</p>
                        <p className="px-3">{product.desc}</p>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-primary mx-auto w-1/3 ">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
