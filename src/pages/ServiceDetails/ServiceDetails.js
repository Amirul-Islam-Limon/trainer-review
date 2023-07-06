import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import defaultProfilePic from '../../../src/assets/images/user-profile.png'
import defaultlogInUserPic from '../../../src/assets/images/defaultLoginUser.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState();
    const serviceData = useLoaderData();
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        fetch(`http://localhost:5000/allCommentById?id=${serviceData?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    },[serviceData])

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const id = serviceData._id;
        const email = user.email;

        const commentInfo = {
            serviceId: id,
            serviceName:serviceData.serviceName,
            serviceImg:serviceData.imageURL,
            comment,
            email,
            
        }

        fetch("http://localhost:5000/comment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(commentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    
                    const addedNewReview = [commentInfo,...reviews]
                    setReviews(addedNewReview);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your comment has been added!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            });
        console.log(comment, id, email);
    }
    console.log(serviceData);
    return (
        <div>
            {/* 
                    service details section 
                                                        */}
            <h2 className='lg:text-6xl text-center font-semibold mb-10'><span className='border-b-4 border-yellow-500'>Service</span><span className='pb-0.5 border-b border-gray-500'> Details</span></h2>
            <div className='p-2'>
            <div className='flex justify-center'>
                <img className='max-h-24' src={serviceData.imageURL} alt="" />
            </div>
            <h4 className='text-2xl text-center pb-2'>{serviceData.serviceName}</h4>
                 <p>{serviceData.description}</p>
            <div className='flex justify-between bg-gray-500 text-white font-medium p-3 mt-3 rounded'>
                <p>price: ${serviceData.price}</p>
                <p className=''><small>rating: {serviceData.rating}</small></p>
            </div>
            </div>
                {/* 
                        write comment section 
                                                  */}
            {
                user?.email &&

                <div className='mb-6'>
                    <h2 className='text-4xl text-center pt-3'>Write Your Comment</h2>
                    <div className='flex w-1/2 mx-auto items-center'>
                        <div className='flex flex-col'>
                            <img className='max-h-24 rounded-full' src={user?.photoURL? user.photoURL : defaultlogInUserPic} alt="" />
                            <h6 className='text-center'>Amirul Islam Limon</h6>
                        </div>
                        <form onSubmit={handleCommentSubmit} className='w-full ml-2'>
                            <textarea name='comment' placeholder="Type here" className="textarea textarea-bordered textarea-md w-full mt-3" ></textarea>
                            <button className='btn btn-primary btn-sm mt-2'>Submit</button>
                        </form>
                    </div>
                </div>
            }
                    {/*
                        previous comment section
                                                            */}
            <div className='mt-10'>
                <div className='flex w-1/2 mx-auto items-center'>
                    <h4 className='text-5xl pb-5'>Comment</h4>
                </div>

                {
                    reviews?.map(review => <div className='flex w-1/2 mx-auto items-center mb-5'>
                        <div className='flex flex-col w-2/6'>
                        <img className='max-h-14 mask mask-circle pl-7' src={defaultProfilePic} alt="" />
                            <h6 className='text-center'>{ review.displayName? review.displayName :review.email}</h6>
                        </div>
                        <div className='w-full ml-2'>
                            <p>{ review.comment}</p>
                        </div>
                    </div>)
                }
                {
                    reviews?.length === 0? <div className='text-center'><p>No Comment Yet</p></div>:""
                }
            </div>

        </div>

        
    )

};


export default ServiceDetails;