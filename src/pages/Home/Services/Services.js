import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import thamnail from '../../../assets/images/portfolio-1.jpg'
import showPhoto from '../../../assets/images/portfolio-2.jpg'

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Services = () => {
    const [services, setServices] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/getServices?limit=3")
            .then(res => res.json())
            .then(data => setServices(data));
    },[])

    // console.log(services)
    return (
        <div className='mt-24'>
            <h2 className='lg:text-6xl text-center font-semibold'><span className='border-b-4 border-yellow-500'>Awesome </span><span className='pb-0.5 border-b border-gray-500'>Services</span></h2>
            <div className='flex justify-center mt-16'>
                {
                    services?.map((service, index) => <div
                        key={index}
                        className='p-2'
                        title='Click View Details To Review A Service '
                    >
                        <div className='flex justify-center'>
                        {/* <img className='max-h-24' src={service.imageURL} alt="" /> */}
                            <PhotoProvider>
                                <PhotoView src={service.imageURL}>
                                    <img className='max-h-24 cursor-pointer' title='click to view photo' src={service.imageURL} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                        <h4 className='text-2xl text-center pb-2'>{service.serviceName}</h4>

                        {
                            service.description.length > 100 ? <p>{service.description.slice(0,100)}<span>... <Link to={`/services/${service._id}`} className='underline text-green-500'>View Details</Link></span></p>:""
                        }
                        <div className='flex justify-between bg-orange-500 text-white font-medium p-3 mt-3 rounded'>
                            <p>price: ${service.price}</p>
                            <p className=''><small>rating: {service.raging}</small></p>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex justify-center mt-10 mb-20'>
                <Link to='/services' className="text-center btn px-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-purple-500 text-white">View More</Link>
            </div>
            <div>
            <PhotoProvider>
                <PhotoView src={showPhoto}>
                    <img src={thamnail} alt="" />
                </PhotoView>
            </PhotoProvider>
            </div>
        </div>
    );
};

export default Services;