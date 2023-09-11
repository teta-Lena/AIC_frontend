import React from 'react'
import './Videos.css'
import pic6 from '../../assets/pic6.jpg'
import pic8 from '../../assets/pic8.jpg'
import pic7 from '../../assets/pic7.jpg'
import pic15 from '../../assets/pic15.jpg'
import { BsPlay } from 'react-icons/bs'
import Navbar from '../shared/navbar'
import MidNav from '../shared/mid-nav'
import Footer from '../shared/footer'
import MainLayout from '@/layouts/MainLayout'


const Videos = () => {
    const videos = new Array(1).fill()
    return (
        <MainLayout >
            <div className='main-container'>
                {videos.map(video => (<div className='wrapper'>
                    <img className='image' src={pic6} alt="" />
                    <div className="overlay">
                        <h2>shayo {video}</h2>
                        <div className="watch">
                            <span className="word">watch</span>
                            <span className="icon"><BsPlay /></span>
                        </div>
                    </div>

                </div>))}

                {videos.map(video => (<div className='wrapper'>
                    <img className='image' src={pic15} alt="" />
                    <div className="overlay">
                        <h2>away {video}</h2>
                        <div className="watch">
                            <span className="word">watch</span>
                            <span className="icon"><BsPlay /></span>
                        </div>
                    </div>

                </div>))}

                {videos.map(video => (<div className='wrapper'>
                    <img className='image' src={pic7} alt="" />
                    <div className="overlay">
                        <h2>you should know {video}</h2>
                        <div className="watch">
                            <span className="word">watch</span>
                            <span className="icon"><BsPlay /></span>
                        </div>
                    </div>
                </div>))}

                {videos.map(video => (<div className='wrapper'>
                    <img className='image' src={pic8} alt="" />
                    <div className="overlay">
                        <h2>bad {video}</h2>
                        <div className="watch">
                            <span className="word">watch</span>
                            <span className="icon"><BsPlay /></span>
                        </div>
                    </div>
                </div>))}
            </div>
        </MainLayout>

    )
}

export default Videos

