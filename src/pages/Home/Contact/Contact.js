import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='my-24'>
            <h2 className='lg:text-5xl text-center mb-10 font-semibold'><span className='border-b-4 border-yellow-500'>Con</span><span className='pb-0.5 border-b border-gray-500'>tact</span></h2>
            <div className='lg:w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                        <input type="text" placeholder="your name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                        <input type="text" placeholder="enter your email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                        <textarea placeholder="your message....." className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
            </div>
            <div className='flex justify-center mt-5 mb-20'>
                <Link to='/' className="text-center btn px-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-purple-500 text-white">submit</Link>
           </div>
        </div>
    );
};

export default Contact;