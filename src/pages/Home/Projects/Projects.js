import React from 'react';
import portfolio1 from '../../../assets/images/portfolio-1.jpg'
import portfolio2 from '../../../assets/images/portfolio-2.jpg'
import portfolio3 from '../../../assets/images/portfolio-3.jpg'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
             <h2 className='lg:text-5xl text-center font-semibold'><span className='border-b-4 border-yellow-500'>Port</span><span className='pb-0.5 border-b border-gray-500'>folio</span></h2>
            <div className='flex justify-center mt-16 mb-10'>
                <div className='p-2'>
                    <img src={portfolio1} alt="" />
                    <h4 className='text-2xl'>Simple React Project</h4>
                </div>
                <div className='p-2'>
                    <img src={portfolio2} alt="" />
                    <h4 className='text-2xl'>React + Nodejs + Express.js</h4>
                </div>
                <div className='p-2'>
                    <img src={portfolio3} alt="" />
                    <h4 className='text-2xl'>Backend With Firebase Integration</h4>
                </div>
            </div>
            <div className='flex justify-center mt-5 mb-20'>
                <Link to='/' className="text-center btn px-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-purple-500 text-white">See More</Link>
           </div>
        </div>
    );
};

export default Projects;