import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../../redux/actions/index'
import { Link } from 'react-router-dom'


const Cart = () => {
    const productCart = useSelector((state) => state.addItem);
    const musicCart = useSelector((state) => state.musicCart); // Assuming you have a separate music cart state
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    };

    const cartItems = (cartItem) => {
        return (
            <div className="md:w-4/5 w-11/12 my-1 mx-auto p-4 bg-light rounded-3" key={cartItem.id}>
                <div className=" py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="grid md:grid-cols-2">
                        <div className="">
                            {cartItem.ytId ? (
                                <img
                                    src={`https://i.ytimg.com/vi/${cartItem.ytId}/hqdefault.jpg`}
                                    alt={cartItem.title || cartItem.productName}
                                    height="200px"
                                    width="180px"
                                />
                            ) : (
                                <img
                                    src={cartItem.productImage}
                                    alt={cartItem.title || cartItem.productName}
                                    height="200px"
                                    width="180px"
                                />
                            )}
                        </div>
                        <div className="flex gap-3">
                            <h3>{cartItem.title || cartItem.productName}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    };

    const button = () => {
        return (
            <div className="py-3">
                <div className="flex items-center">
                    <Link to="/store/checkout" className="btn btn-outline-primary mb-5  mx-auto">
                        Proceed To Checkout
                    </Link>
                </div>
            </div>
        );
    };

    return (
        < div className='grid'>
            <p className='text-center h1'>Your Cart</p>
            <hr />
            {(productCart && productCart.length > 0) || (musicCart && musicCart.length > 0) ? (
                <>
                    {productCart && productCart.length > 0 && <p className='h3 text-center'>Products in Cart</p>}
                    {productCart && productCart.map(cartItems)}
                    {musicCart && musicCart.length > 0 && <h2>Music in Cart</h2>}
                    {musicCart && musicCart.map(cartItems)}
                    {button()}
                </>
            ) : (
                emptyCart()
            )}
        </div>
    );
};

export default Cart;
