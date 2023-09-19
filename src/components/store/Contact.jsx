import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="">
                <div className=" text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                </div>
                <div className="max-w-full grid md:grid-cols-2 grid-cols-1 p-3">
                    <div className="flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="exampleForm" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="John Smith" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
