import React, { useContext, useEffect, useState} from 'react';
import deleteIcon from '../../../src/assets/images/deleteIcon.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MyReviews2 = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState();
    const [editReviewComment, setEditReviewComment] = useState();


    const MySwal = withReactContent(Swal)

    const handleDeleteReview = (id) => {

        Swal.fire({
            title: 'Want to delete this review?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/deleteReview/${id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {

                            const remainingReviews = myReviews.filter(review => review._id !== id);
                            setMyReviews(remainingReviews);

                            Swal.fire(
                                'Deleted!',
                                'Your review has been deleted.',
                                'success'
                              )
                        }
                    });
            }
          })
    }


    useEffect(() => {
        fetch(`http://localhost:5000/allCommentByEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            });
    }, [user])

    const handleNewReviewOnState = (event) => {
        // const changedComment = event.target.value;
        // const newComment = {newComment:changedComment}
        // setNewReviewComment(changedComment);
    }

    return (
        <div>
            <h2 className='lg:text-5xl text-center font-semibold'><span className='border-b-4 border-yellow-500'>My </span><span className='pb-0.5 border-b border-gray-500'>Reviews</span></h2>
            
            <div className="overflow-x-auto">
                <table className="table mt-8">
                    {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <p>Delete Option</p>
                    </label>
                    </th>
                    <th>Name</th>
                    <th className='flex justify-center'><p>Comment</p></th>
                    <th className='text-right'>Edit Option</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>                  

                    {
                        myReviews?.map(review => <tr
                        key={review._id}
                        >
                        <th>
                            <label>
                            <img onClick={()=>handleDeleteReview(review._id)} className='cursor-pointer w-15' src={deleteIcon} alt="" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                <img src={review?.serviceImg? review.serviceImg:"/tailwind-css-component-profile-2@56w.png"} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{review.serviceName? review.serviceName: review.email}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p>{ review.comment}</p>
                        </td>
                        {/* <td className='w-30 text-right'><button onClick={()=>handleOpenModal(review._id)} className='btn btn-sm'>Edit Review</button></td> */}
                        <td className='w-30 text-right'><button className='btn btn-sm'>Edit Review</button></td>
                        

                            <div>
                            {/* <button className="btn" onClick={showModal()}>open modal</button> */}
                            <dialog id="my_modal_3" className="modal">
                                <form method="dialog" className="modal-box">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    <h3 className="font-bold text-lg mb-2">Edit Your Review</h3>
                                    <textarea onBlur={handleNewReviewOnState} name='editReview' placeholder="comment" defaultValue={"kk"} className="textarea textarea-bordered textarea-md w-full" ></textarea>
                                    <div className='flex justify-between'>
                                    {/* <button onClick={()=>handleEditReview(review._id)} className='btn btn-sm btn-primary mt-3'>Save Change</button>         */}
                                    <button className='btn btn-sm btn-primary mt-3'>Save Change</button>        
                                    <button className='btn btn-sm btn-ghost mt-3'>Cancel</button>        
                                    </div>
                                </form>
                            </dialog>
                            </div>

                        </tr>)            
                    }
                
                </tbody>    
            </table>
            </div>
            
        </div>
    );
};

export default MyReviews2;