import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServices = () => {
    const [services, setServices] = useState(null)

    useTitle("Services");

    useEffect(() => {
        fetch("http://localhost:5000/getServices?limit=all")
            .then(res => res.json())
            .then(data => setServices(data));
    },[])

    console.log(services)
    return (
        <div className='my-20'>
        <h2 className='lg:text-6xl text-center font-semibold'><span className='border-b-4 border-yellow-500'>Awesome </span><span className='pb-0.5 border-b border-gray-500'>Services</span></h2>
        <div className='grid grid-cols-3 gap-y-20 justify-center mt-16'>
            {
                services?.map((service, index) => <div
                    key={index}
                    className='p-2'
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
                    <div className='flex justify-between bg-red-400 text-white font-medium p-3 mt-3 rounded'>
                        <p>price: ${service.price}</p>
                        <p className=''><small>rating: {service.raging}</small></p>
                    </div>
                </div>)
            }
        </div>
    </div>
    );
};

export default AllServices;