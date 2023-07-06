import React from 'react';
import reviewImg from '../../../../src/assets/images/review-img.jpg'

const Banner = () => {
    return (
        <div className='grid grid-cols-2 lg:mx-20 my-24'>
            <div className=''>
                <h3 className='text-6xl font-semibold'>Review awesome Services</h3>
                <h6 className='mt-3 text-orange-500 font-semibold'>Our course is rated excellent by over 42,000 people</h6>
                <p className='mt-3'>Today, more than 48,000 people have already studied at our university in various fields: programming, photography, marketing and management</p>
                <div className='mt-10'>
                    <button className="btn px-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-purple-500 text-white">See More</button>
                    <button class="ms-5 btn btn-outline px-16 btn-primary   hover:from-pink-500 hover:to-purple-500 text-white">Latest News</button>
                </div>
            </div>
            <div className='flex align-middle'>
                <img src={reviewImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;